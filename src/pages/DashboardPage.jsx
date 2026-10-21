
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";


const STORAGE_KEY = "library-management-v1";

const validSections = [
  "Dashboard",
  "Books",
  "Categories",
  "Members",
  "Transactions",
  "Reports",
  "Profile",
];

const initialData = {
  books: [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Programming", isbn: "978001", quantity: 10, available: 8 },
    { id: 2, title: "React Basics", author: "John Smith", category: "Programming", isbn: "978002", quantity: 8, available: 6 },
    { id: 3, title: "Python Guide", author: "Mark Lee", category: "Technology", isbn: "978003", quantity: 12, available: 12 },
    { id: 4, title: "Atomic Habits", author: "James Clear", category: "Self Help", isbn: "978004", quantity: 6, available: 5 },
  ],
  members: [
    { id: 101, name: "Ahmed Khan", email: "ahmed@example.com", phone: "03001234567" },
    { id: 102, name: "Sara Ali", email: "sara@example.com", phone: "03111234567" },
  ],
  categories: [
    { id: 201, name: "Programming", description: "Programming and software development" },
    { id: 202, name: "Technology", description: "Technology and computing" },
    { id: 203, name: "Self Help", description: "Personal development books" },
  ],
  transactions: [],
  profile: { name: "Library Admin", email: "admin@example.com", phone: "" },
};

const navItems = [
  { label: "Dashboard", icon: "⌂" },
  { label: "Books", icon: "▤" },
  { label: "Categories", icon: "▦" },
  { label: "Members", icon: "♙" },
  { label: "Transactions", icon: "⇄" },
  { label: "Reports", icon: "▥" },
  { label: "Profile", icon: "◎" },
];

const fields = {
  Books: [
    ["title", "Book title"],
    ["author", "Author"],
    ["category", "Category"],
    ["isbn", "ISBN"],
    ["quantity", "Total copies", "number"],
  ],
  Members: [
    ["name", "Full name"],
    ["email", "Email address", "email"],
    ["phone", "Phone number"],
  ],
  Categories: [
    ["name", "Category name"],
    ["description", "Description"],
  ],
  Transactions: [
    ["bookId", "Book", "selectBook"],
    ["memberId", "Member", "selectMember"],
    ["dueDate", "Due date", "date"],
  ],
};

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return initialData;

    const parsed = JSON.parse(saved);

    return {
      ...initialData,
      ...parsed,
      books: Array.isArray(parsed.books) ? parsed.books : initialData.books,
      members: Array.isArray(parsed.members) ? parsed.members : initialData.members,
      categories: Array.isArray(parsed.categories) ? parsed.categories : initialData.categories,
      transactions: Array.isArray(parsed.transactions) ? parsed.transactions : [],
      profile: { ...initialData.profile, ...parsed.profile },
    };
  } catch {
    return initialData;
  }
}

export default function DashboardPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const requestedSection = searchParams.get("section");
  const [active, setActive] = useState(() =>
    validSections.includes(requestedSection) ? requestedSection : "Dashboard"
  );

  const [data, setData] = useState(loadData);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({});
  const [mobileNav, setMobileNav] = useState(false);
  const [filter, setFilter] = useState("All");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const section = searchParams.get("section");
    setActive(validSections.includes(section) ? section : "Dashboard");
  }, [searchParams]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      setNotice("Storage is full. Export your data and free some browser storage.");
    }
  }, [data]);

  const openSection = (section) => {
    if (!validSections.includes(section)) return;

    setActive(section);
    setFilter("All");
    setSearch("");
    setMobileNav(false);
    setModal(null);

    if (section === "Dashboard") {
      setSearchParams({});
    } else {
      setSearchParams({ section });
    }
  };

  const update = (key, value) =>
    setData((previous) => ({ ...previous, [key]: value }));

  const notify = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3000);
  };

  const allRecords = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [];

    return [
      ...data.books.map((x) => ({ ...x, _type: "Books", _name: x.title })),
      ...data.members.map((x) => ({ ...x, _type: "Members", _name: x.name })),
      ...data.categories.map((x) => ({ ...x, _type: "Categories", _name: x.name })),
      ...data.transactions.map((x) => ({
        ...x,
        _type: "Transactions",
        _name: x.bookTitle,
      })),
    ].filter((x) =>
      Object.values(x).some((v) =>
        String(v ?? "").toLowerCase().includes(q)
      )
    );
  }, [data, search]);

  const issued = data.transactions.filter((t) => t.status === "Issued");

  const overdue = issued.filter(
    (t) =>
      t.dueDate &&
      t.dueDate < new Date().toISOString().slice(0, 10)
  );

  const totalCopies = data.books.reduce(
    (n, b) => n + Number(b.quantity || 0),
    0
  );

  const availableCopies = data.books.reduce(
    (n, b) => n + Number(b.available || 0),
    0
  );

  function openAdd(section) {
    if (section === "Profile") {
      setForm({ ...data.profile });
    } else if (section === "Transactions") {
      setForm({ bookId: "", memberId: "", dueDate: "" });
    } else if (section === "Books") {
      setForm({
        title: "",
        author: "",
        category: "",
        isbn: "",
        quantity: 1,
      });
    } else if (section === "Members") {
      setForm({ name: "", email: "", phone: "" });
    } else {
      setForm({ name: "", description: "" });
    }

    setModal({ section, id: null });
  }

  function openEdit(section, record) {
    setForm({ ...record });
    setModal({ section, id: record.id });
  }

  function saveRecord(event) {
    event.preventDefault();
    if (!modal) return;

    const section = modal.section;
    const key = section.toLowerCase();
    const recordId = modal.id;

    if (section === "Profile") {
      update("profile", { ...data.profile, ...form });
      setModal(null);
      notify("Profile updated.");
      return;
    }

    if (section === "Transactions" && !recordId) {
      const book = data.books.find(
        (b) => b.id === Number(form.bookId)
      );
      const member = data.members.find(
        (m) => m.id === Number(form.memberId)
      );

      if (!book || !member) {
        return notify("Select a valid book and member.");
      }

      if (book.available < 1) {
        return notify("No available copies of this book.");
      }

      const transaction = {
        id: Date.now(),
        bookId: book.id,
        bookTitle: book.title,
        memberId: member.id,
        memberName: member.name,
        issueDate: new Date().toISOString().slice(0, 10),
        dueDate: form.dueDate || "",
        returnDate: "",
        status: "Issued",
      };

      update(
        "books",
        data.books.map((b) =>
          b.id === book.id
            ? { ...b, available: b.available - 1 }
            : b
        )
      );

      update("transactions", [...data.transactions, transaction]);
      setModal(null);
      notify("Book issued successfully.");
      return;
    }

    if (section === "Books") {
      const quantity = Math.max(0, Number(form.quantity) || 0);

      if (quantity < 1) {
        return notify("Book quantity must be at least one.");
      }

      const existing = data.books.find((b) => b.id === recordId);
      const borrowed = existing
        ? existing.quantity - existing.available
        : 0;

      if (quantity < borrowed) {
        return notify(
          "Quantity cannot be less than currently issued copies."
        );
      }

      const record = {
        ...form,
        id: recordId || Date.now(),
        quantity,
        available: quantity - borrowed,
      };

      update(
        "books",
        recordId
          ? data.books.map((b) => (b.id === recordId ? record : b))
          : [...data.books, record]
      );
    } else {
      const record = { ...form, id: recordId || Date.now() };

      update(
        key,
        recordId
          ? data[key].map((x) => (x.id === recordId ? record : x))
          : [...data[key], record]
      );
    }

    setModal(null);
    notify(recordId ? "Record updated." : "Record added.");
  }

  function deleteRecord(section, record) {
    const name = record.title || record.name || record.bookTitle;

    if (!window.confirm(`Delete "${name}"?`)) return;

    if (section === "Books") {
      if (
        data.transactions.some(
          (t) => t.bookId === record.id && t.status === "Issued"
        )
      ) {
        return notify("Return all issued copies before deleting this book.");
      }

      update(
        "books",
        data.books.filter((b) => b.id !== record.id)
      );
    } else if (section === "Members") {
      if (
        data.transactions.some(
          (t) => t.memberId === record.id && t.status === "Issued"
        )
      ) {
        return notify("This member has an active book issue.");
      }

      update(
        "members",
        data.members.filter((m) => m.id !== record.id)
      );
    } else if (section === "Categories") {
      if (data.books.some((b) => b.category === record.name)) {
        return notify(
          "Move books to another category before deleting this category."
        );
      }

      update(
        "categories",
        data.categories.filter((c) => c.id !== record.id)
      );
    }

    notify("Record deleted.");
  }

  function returnBook(transaction) {
    if (transaction.status !== "Issued") return;

    if (
      !window.confirm(
        `Mark "${transaction.bookTitle}" as returned?`
      )
    ) {
      return;
    }

    update(
      "transactions",
      data.transactions.map((t) =>
        t.id === transaction.id
          ? {
              ...t,
              status: "Returned",
              returnDate: new Date().toISOString().slice(0, 10),
            }
          : t
      )
    );

    update(
      "books",
      data.books.map((b) =>
        b.id === transaction.bookId
          ? {
              ...b,
              available: Math.min(b.quantity, b.available + 1),
            }
          : b
      )
    );

    notify("Book returned successfully.");
  }

  function exportCSV(rows, filename) {
    if (!rows.length) {
      return notify("No records available to export.");
    }

    const headers = [...new Set(rows.flatMap((r) => Object.keys(r)))];
    const escapeCSV = (value) =>
      `"${String(value ?? "").replace(/"/g, '""')}"`;

    const csv = [
      headers.map(escapeCSV).join(","),
      ...rows.map((row) =>
        headers.map((header) => escapeCSV(row[header])).join(",")
      ),
    ].join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function resetDemo() {
    if (
      !window.confirm(
        "This replaces your saved browser data with the initial sample data. Continue?"
      )
    ) {
      return;
    }

    setData(initialData);
    setSearch("");
    notify("Sample data restored.");
  }

  const sectionKey = active.toLowerCase();

  const records = [
    "Books",
    "Members",
    "Categories",
    "Transactions",
  ].includes(active)
    ? data[sectionKey].filter((record) => {
        const q = search.trim().toLowerCase();

        const matches =
          !q ||
          Object.values(record).some((value) =>
            String(value ?? "").toLowerCase().includes(q)
          );

        return (
          matches &&
          (filter === "All" || record.status === filter)
        );
      })
    : [];

  return (
    <div className="min-h-screen bg-[#F9F3E6] p-2 text-[#1E2D4A] sm:p-4">
      <div className="mx-auto flex min-h-[calc(100vh-32px)] max-w-[1400px] overflow-hidden rounded-2xl border border-[#F0E3C5] bg-[#FFFCF5] shadow-xl">
        {mobileNav && (
          <button
            aria-label="Close navigation"
            onClick={() => setMobileNav(false)}
            className="fixed inset-0 z-20 bg-slate-950/40 lg:hidden"
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 z-30 flex w-[260px] flex-col border-r border-[#F0E3C5] bg-[#FFFBF0] p-5 transition-transform duration-300 lg:static lg:translate-x-0 ${
            mobileNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#102A5E] text-2xl text-white shadow-lg">
              📚
            </div>
            <div>
              <h2 className="font-extrabold leading-tight">
                Library Management
              </h2>
              <p className="text-xs text-amber-700">Control Center</p>
            </div>
          </div>

          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[.2em] text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => openSection(item.label)}
                className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200 hover:translate-x-1 hover:shadow-sm ${
                  active === item.label
                    ? "bg-[#102A5E] text-white shadow-lg shadow-blue-950/15"
                    : "text-slate-600 hover:bg-[#FFF0C0] hover:text-[#102A5E]"
                }`}
              >
                <span className="text-xl transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                {item.label}
                {active === item.label && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-amber-300" />
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            <div className="rounded-xl border border-amber-200 bg-[#FFF0C0] p-4">
              <p className="text-xs font-bold">Library status</p>
              <p className="mt-1 text-sm text-slate-600">
                {availableCopies} copies available
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-amber-500 transition-all duration-500"
                  style={{
                    width: `${
                      totalCopies
                        ? (availableCopies / totalCopies) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            <button
              onClick={() =>
                exportCSV(data.transactions, "library-transactions.csv")
              }
              className="w-full rounded-xl border border-[#E9D8AD] py-3 text-sm font-bold transition hover:bg-white hover:shadow-md"
            >
              ↓ Export transactions
            </button>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-10 flex min-h-[76px] flex-wrap items-center justify-between gap-3 border-b border-[#F0E3C5] bg-[#FFFCF5]/95 px-4 py-3 backdrop-blur-md sm:px-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileNav(true)}
                className="rounded-lg border border-amber-200 px-3 py-2 hover:bg-amber-50 lg:hidden"
              >
                ☰
              </button>
              <div>
                <h1 className="text-lg font-extrabold sm:text-xl">
                  {active}
                </h1>
                <p className="hidden text-xs text-slate-500 sm:block">
                  Library Management System
                </p>
              </div>
            </div>

            <div className="relative order-3 w-full sm:order-none sm:w-auto">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                ⌕
              </span>

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search all records..."
                className="w-full rounded-xl border border-[#E9DDBF] bg-white py-2.5 pl-9 pr-10 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100 sm:w-[260px]"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"
                >
                  ×
                </button>
              )}

              {search.trim() && (
                <div className="absolute left-0 right-0 top-full mt-2 max-h-80 overflow-auto rounded-xl border border-amber-100 bg-white p-2 shadow-2xl">
                  <p className="px-2 py-1 text-xs text-slate-400">
                    {allRecords.length} matching records
                  </p>

                  {allRecords.slice(0, 8).map((record) => (
                    <button
                      key={`${record._type}-${record.id}`}
                      onClick={() => openSection(record._type)}
                      className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-amber-50"
                    >
                      <span className="truncate font-semibold">
                        {record._name || record.memberName}
                      </span>
                      <span className="shrink-0 text-xs text-slate-400">
                        {record._type}
                      </span>
                    </button>
                  ))}

                  {!allRecords.length && (
                    <p className="p-3 text-sm text-slate-500">
                      No matching records.
                    </p>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => openSection("Profile")}
              className="flex items-center gap-2 rounded-full p-1 pr-3 transition hover:bg-amber-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#102A5E] font-bold text-white">
                {(data.profile.name || "A")[0].toUpperCase()}
              </div>
              <span className="max-w-[110px] truncate text-sm font-bold">
                {data.profile.name}
              </span>
            </button>
          </header>

          {notice && (
            <div
              role="status"
              className="mx-4 mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900 sm:mx-6"
            >
              {notice}
            </div>
          )}

          <div className="p-4 sm:p-6">
            {active === "Dashboard" && (
              <div className="animate-[fadeIn_.3s_ease-out]">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-amber-700">
                      OVERVIEW
                    </p>
                    <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                      Welcome back, {data.profile.name}!
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      Here is your library's current activity.
                    </p>
                  </div>
                  <button
                    onClick={() => openAdd("Books")}
                    className="rounded-xl bg-[#102A5E] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    + Add new book
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <Stat title="Book titles" value={data.books.length} icon="▤" color="blue" sub={`${totalCopies} total copies`} />
                  <Stat title="Members" value={data.members.length} icon="♙" color="green" sub="Registered members" />
                  <Stat title="Currently issued" value={issued.length} icon="⇧" color="amber" sub={`${availableCopies} copies available`} />
                  <Stat title="Overdue books" value={overdue.length} icon="!" color="red" sub="Past their due date" />
                </div>

                <div className="mt-6 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
                  <div className="rounded-2xl border border-[#F0E3C5] bg-white p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="font-extrabold">Recent transactions</h3>
                        <p className="mt-1 text-xs text-slate-400">Latest library activity</p>
                      </div>
                      <button
                        onClick={() => openSection("Transactions")}
                        className="text-sm font-bold text-blue-700 hover:underline"
                      >
                        View all →
                      </button>
                    </div>

                    {data.transactions.length === 0 ? (
                      <Empty text="No transactions yet. Issue a book to see activity here." />
                    ) : (
                      [...data.transactions].reverse().slice(0, 5).map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between gap-3 border-t border-slate-100 py-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold">{transaction.bookTitle}</p>
                            <p className="text-xs text-slate-500">{transaction.memberName} · {transaction.issueDate}</p>
                          </div>
                          <Status value={transaction.status} />
                        </div>
                      ))
                    )}
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-[#102A5E] to-[#2454A1] p-6 text-white shadow-lg">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-300">Collection health</p>
                    <h3 className="mt-2 text-2xl font-black">Your library at a glance</h3>
                    <div className="mt-6 space-y-5">
                      <Progress label="Available copies" value={availableCopies} total={totalCopies} />
                      <Progress label="Issued copies" value={totalCopies - availableCopies} total={totalCopies} />
                      <Progress label="Registered members" value={data.members.length} total={Math.max(data.members.length, 10)} />
                    </div>
                    <button
                      onClick={() => openSection("Reports")}
                      className="mt-7 rounded-xl bg-amber-300 px-4 py-3 text-sm font-extrabold text-[#102A5E] transition hover:bg-amber-200"
                    >
                      Open reports →
                    </button>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[#F0E3C5] bg-white p-5">
                  <h3 className="font-extrabold">Quick actions</h3>
                  <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[
                      ["＋", "Add book", "Books"],
                      ["♙", "Add member", "Members"],
                      ["⇄", "Issue book", "Transactions"],
                      ["▥", "View reports", "Reports"],
                    ].map(([icon, label, section]) => (
                      <button
                        key={label}
                        onClick={() =>
                          section === "Reports"
                            ? openSection("Reports")
                            : openAdd(section)
                        }
                        className="rounded-xl border border-amber-100 bg-[#FFFCF5] p-4 text-left transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-amber-50 hover:shadow-md"
                      >
                        <span className="text-2xl">{icon}</span>
                        <p className="mt-3 text-sm font-bold">{label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {["Books", "Members", "Categories", "Transactions"].includes(active) && (
              <div className="animate-[fadeIn_.3s_ease-out]">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-amber-700">MANAGEMENT</p>
                    <h2 className="mt-1 text-2xl font-black">{active}</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Create, search, update and manage your records.
                    </p>
                  </div>
                  <button
                    onClick={() => openAdd(active)}
                    className="rounded-xl bg-[#102A5E] px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    + {active === "Transactions" ? "Issue a book" : `Add ${active.slice(0, -1).toLowerCase()}`}
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm text-slate-500">
                    Showing <strong>{records.length}</strong> records
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {active === "Transactions" &&
                      ["All", "Issued", "Returned"].map((status) => (
                        <button
                          key={status}
                          onClick={() => setFilter(status)}
                          className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                            filter === status
                              ? "bg-[#102A5E] text-white"
                              : "border border-amber-100 bg-white hover:bg-amber-50"
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    <button
                      onClick={() => exportCSV(records, `${active.toLowerCase()}.csv`)}
                      className="rounded-lg border border-amber-200 bg-white px-3 py-2 text-xs font-bold transition hover:bg-amber-50"
                    >
                      ↓ Export CSV
                    </button>
                  </div>
                </div>

                <div className="mt-4 overflow-x-auto rounded-2xl border border-[#F0E3C5] bg-white shadow-sm">
                  <table className="w-full min-w-[700px] text-left text-sm">
                    <thead className="bg-[#FFF8E7] text-xs uppercase tracking-wide text-slate-500">
                      <tr>
                        {(active === "Books"
                          ? ["Book", "Author", "Category", "ISBN", "Stock", "Actions"]
                          : active === "Members"
                          ? ["Member", "Email", "Phone", "ID", "Actions"]
                          : active === "Categories"
                          ? ["Category", "Description", "ID", "Actions"]
                          : ["Book", "Member", "Issued", "Due date", "Status", "Actions"]
                        ).map((heading) => (
                          <th key={heading} className="whitespace-nowrap px-4 py-4 font-bold">
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                      {records.map((record) => (
                        <tr key={record.id} className="transition hover:bg-amber-50/60">
                          {active === "Books" && (
                            <>
                              <td className="px-4 py-4 font-bold">{record.title}</td>
                              <td className="px-4 py-4">{record.author}</td>
                              <td className="px-4 py-4">
                                <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-800">{record.category}</span>
                              </td>
                              <td className="px-4 py-4 text-slate-500">{record.isbn}</td>
                              <td className="px-4 py-4">
                                <span className="font-bold">{record.available}</span>
                                <span className="text-slate-400"> / {record.quantity}</span>
                              </td>
                            </>
                          )}

                          {active === "Members" && (
                            <>
                              <td className="px-4 py-4 font-bold">{record.name}</td>
                              <td className="px-4 py-4">{record.email}</td>
                              <td className="px-4 py-4">{record.phone}</td>
                              <td className="px-4 py-4 text-slate-500">#{record.id}</td>
                            </>
                          )}

                          {active === "Categories" && (
                            <>
                              <td className="px-4 py-4 font-bold">{record.name}</td>
                              <td className="px-4 py-4">{record.description}</td>
                              <td className="px-4 py-4 text-slate-500">#{record.id}</td>
                            </>
                          )}

                          {active === "Transactions" && (
                            <>
                              <td className="px-4 py-4 font-bold">{record.bookTitle}</td>
                              <td className="px-4 py-4">{record.memberName}</td>
                              <td className="px-4 py-4">{record.issueDate}</td>
                              <td className="px-4 py-4">{record.dueDate || "—"}</td>
                              <td className="px-4 py-4"><Status value={record.status} /></td>
                            </>
                          )}

                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center gap-2">
                              {active === "Transactions" && record.status === "Issued" && (
                                <button
                                  onClick={() => returnBook(record)}
                                  className="rounded-lg bg-green-50 px-3 py-2 text-xs font-bold text-green-700 transition hover:bg-green-100"
                                >
                                  Return
                                </button>
                              )}
                              {active !== "Transactions" && (
                                <button
                                  onClick={() => openEdit(active, record)}
                                  className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100"
                                >
                                  Edit
                                </button>
                              )}
                              {active !== "Transactions" && (
                                <button
                                  onClick={() => deleteRecord(active, record)}
                                  className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-600 transition hover:bg-red-100"
                                >
                                  Delete
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}

                      {!records.length && (
                        <tr>
                          <td colSpan={6} className="p-10">
                            <Empty text="No records found. Try another search or add a new record." />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {active === "Reports" && (
              <div className="animate-[fadeIn_.3s_ease-out]">
                <p className="text-sm font-semibold text-amber-700">ANALYTICS</p>
                <h2 className="mt-1 text-2xl font-black">Library Reports</h2>
                <p className="mt-2 text-sm text-slate-500">
                  Reports are calculated from the records currently stored in this browser.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <Stat title="Total titles" value={data.books.length} icon="▤" color="blue" sub={`${totalCopies} copies`} />
                  <Stat title="Issued records" value={issued.length} icon="⇧" color="amber" sub="Currently on loan" />
                  <Stat title="Returned records" value={data.transactions.filter((t) => t.status === "Returned").length} icon="✓" color="green" sub="Completed returns" />
                  <Stat title="Overdue records" value={overdue.length} icon="!" color="red" sub="Require attention" />
                  <Stat title="Categories" value={data.categories.length} icon="▦" color="blue" sub="Organized collections" />
                  <Stat title="Members" value={data.members.length} icon="♙" color="green" sub="Registered members" />
                </div>

                <div className="mt-6 rounded-2xl border border-amber-100 bg-white p-5">
                  <h3 className="font-extrabold">Inventory by book</h3>
                  <div className="mt-4 space-y-5">
                    {data.books.map((book) => (
                      <Progress
                        key={book.id}
                        label={`${book.title} · ${book.available} available`}
                        value={book.available}
                        total={book.quantity}
                      />
                    ))}
                    {!data.books.length && (
                      <Empty text="Add books to generate inventory reports." />
                    )}
                  </div>
                  <button
                    onClick={() => exportCSV(data.books, "library-inventory.csv")}
                    className="mt-6 rounded-xl bg-[#102A5E] px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                  >
                    ↓ Download inventory CSV
                  </button>
                </div>
              </div>
            )}

            {active === "Profile" && (
              <div className="mx-auto max-w-2xl animate-[fadeIn_.3s_ease-out]">
                <p className="text-sm font-semibold text-amber-700">ACCOUNT SETTINGS</p>
                <h2 className="mt-1 text-2xl font-black">Profile settings</h2>

                <div className="mt-6 rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#102A5E] text-3xl text-white">
                      {(data.profile.name || "A")[0].toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold">{data.profile.name}</h3>
                      <p className="text-sm text-slate-500">Local administrator profile</p>
                    </div>
                  </div>

                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      notify("Profile saved.");
                    }}
                    className="space-y-4"
                  >
                    <label className="block text-sm font-bold">
                      Full name
                      <input
                        value={data.profile.name}
                        onChange={(event) =>
                          update("profile", {
                            ...data.profile,
                            name: event.target.value,
                          })
                        }
                        className="mt-2 w-full rounded-xl border border-amber-100 px-4 py-3 font-normal outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-50"
                        required
                      />
                    </label>

                    <label className="block text-sm font-bold">
                      Email address
                      <input
                        type="email"
                        value={data.profile.email}
                        onChange={(event) =>
                          update("profile", {
                            ...data.profile,
                            email: event.target.value,
                          })
                        }
                        className="mt-2 w-full rounded-xl border border-amber-100 px-4 py-3 font-normal outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-50"
                        required
                      />
                    </label>

                    <label className="block text-sm font-bold">
                      Phone number
                      <input
                        value={data.profile.phone}
                        onChange={(event) =>
                          update("profile", {
                            ...data.profile,
                            phone: event.target.value,
                          })
                        }
                        className="mt-2 w-full rounded-xl border border-amber-100 px-4 py-3 font-normal outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-50"
                      />
                    </label>

                    <p className="text-xs leading-relaxed text-slate-500">
                      These details are stored in this browser. This frontend does not authenticate users or change a real account password.
                    </p>

                    <button
                      type="submit"
                      className="rounded-xl bg-[#102A5E] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                    >
                      Save profile
                    </button>
                  </form>

                  <button
                    onClick={resetDemo}
                    className="mt-4 rounded-xl border border-red-200 px-4 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                  >
                    Restore sample data
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setModal(null);
          }}
        >
          <div className="my-auto w-full max-w-lg animate-[fadeIn_.2s_ease-out] rounded-2xl border border-amber-100 bg-[#FFFCF5] p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  {modal.id ? "UPDATE RECORD" : "NEW RECORD"}
                </p>
                <h2 className="mt-1 text-xl font-black">
                  {modal.id ? "Edit" : "Add"}{" "}
                  {modal.section === "Transactions"
                    ? "Book Issue"
                    : modal.section === "Profile"
                    ? "Profile"
                    : modal.section.slice(0, -1)}
                </h2>
              </div>
              <button
                onClick={() => setModal(null)}
                className="rounded-lg px-3 py-2 text-xl transition hover:bg-amber-100"
              >
                ×
              </button>
            </div>

            <form onSubmit={saveRecord} className="space-y-4">
              {modal.section === "Profile" ? (
                <>
                  {[
                    ["name", "Full name", "text"],
                    ["email", "Email address", "email"],
                    ["phone", "Phone number", "text"],
                  ].map(([key, label, type]) => (
                    <label key={key} className="block text-sm font-bold">
                      {label}
                      <input
                        type={type}
                        required={key !== "phone"}
                        value={form[key] ?? ""}
                        onChange={(event) =>
                          setForm({ ...form, [key]: event.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-amber-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                      />
                    </label>
                  ))}
                </>
              ) : (
                fields[modal.section]?.map(([key, label, type]) => (
                  <label key={key} className="block text-sm font-bold">
                    {label}

                    {type === "selectBook" ? (
                      <select
                        required
                        value={form[key] || ""}
                        onChange={(event) =>
                          setForm({ ...form, [key]: event.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-amber-200 bg-white px-4 py-3 font-normal outline-none focus:ring-4 focus:ring-amber-100"
                      >
                        <option value="">Choose a book</option>
                        {data.books
                          .filter((book) => book.available > 0)
                          .map((book) => (
                            <option key={book.id} value={book.id}>
                              {book.title} ({book.available} available)
                            </option>
                          ))}
                      </select>
                    ) : type === "selectMember" ? (
                      <select
                        required
                        value={form[key] || ""}
                        onChange={(event) =>
                          setForm({ ...form, [key]: event.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-amber-200 bg-white px-4 py-3 font-normal outline-none focus:ring-4 focus:ring-amber-100"
                      >
                        <option value="">Choose a member</option>
                        {data.members.map((member) => (
                          <option key={member.id} value={member.id}>
                            {member.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        required={key !== "dueDate"}
                        type={type || "text"}
                        min={type === "number" ? "1" : undefined}
                        value={form[key] ?? ""}
                        onChange={(event) =>
                          setForm({ ...form, [key]: event.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-amber-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                      />
                    )}
                  </label>
                ))
              )}

              {modal.section === "Books" && (
                <p className="text-xs text-slate-500">
                  Available copies are adjusted automatically when a book is issued or returned.
                </p>
              )}

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="flex-1 rounded-xl border border-amber-200 py-3 text-sm font-bold transition hover:bg-amber-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[#102A5E] py-3 text-sm font-bold text-white transition hover:bg-blue-800"
                >
                  {modal.id
                    ? "Save changes"
                    : modal.section === "Transactions"
                    ? "Issue book"
                    : "Create record"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function Stat({ title, value, icon, color, sub }) {
  const styles = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    green: "bg-green-50 text-green-700 border-green-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    red: "bg-red-50 text-red-700 border-red-100",
  };

  return (
    <div className="group rounded-2xl border border-[#F0E3C5] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xl transition group-hover:scale-110 ${styles[color]}`}>
          {icon}
        </span>
      </div>
      <p className="mt-4 text-3xl font-black tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{sub}</p>
    </div>
  );
}

function Progress({ label, value, total }) {
  const percent =
    total > 0 ? Math.min(100, Math.round((value / total) * 100)) : 0;

  return (
    <div>
      <div className="mb-2 flex justify-between gap-2 text-xs">
        <span className="font-semibold">{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-amber-400 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function Status({ value }) {
  const returned = value === "Returned";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        returned
          ? "bg-green-50 text-green-700"
          : "bg-amber-50 text-amber-800"
      }`}
    >
      {value}
    </span>
  );
}

function Empty({ text }) {
  return (
    <div className="py-6 text-center">
      <div className="text-3xl">📚</div>
      <p className="mt-2 text-sm text-slate-500">{text}</p>
    </div>
  );
}
