// pages/login.jsx  (or app/login/page.jsx)
// If you use Next.js app router change `useRouter` import to `next/navigation` accordingly.
"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dummy users: phone -> password + role
  // You can expand this or replace with real API later.
  const DUMMY_USERS = [
    { phone: "9999999999", password: "admin123", role: "admin", name: "Admin User" },
    { phone: "8888888888", password: "user123", role: "user", name: "Regular User" },
    { phone: "7777777777", password: "warden123", role: "warden", name: "Warden" }, // example extra role
  ];

  function findUserByPhone(p) {
    return DUMMY_USERS.find((u) => u.phone === p);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      setLoading(false);
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      setLoading(false);
      return;
    }

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 500));

    const user = findUserByPhone(phone.trim());

    if (!user) {
      setError("No account found with that phone number.");
      setLoading(false);
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password.");
      setLoading(false);
      return;
    }

    // Auth success: store small auth info (DO NOT store sensitive data in production)
    const auth = {
      phone: user.phone,
      role: user.role,
      name: user.name,
      token: "dummy-token-" + Math.random().toString(36).slice(2, 10),
    };
    try {
      localStorage.setItem("auth", JSON.stringify(auth));
    } catch (err) {
      // ignore storage error
    }

    // Redirect based on role
    if (user.role === "admin") {
      router.push("/admin/dashboard");
    } else if (user.role === "user") {
      router.push("/user/dashboard");
    } else {
      // fallback - you can add more routes per role
      router.push("/dashboard");
    }
  };

  const fillDummy = (which) => {
    // convenience helpers to fill fields while testing
    const u = DUMMY_USERS.find((x) => x.role === which);
    if (u) {
      setPhone(u.phone);
      setPassword(u.password);
      setError("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-sky-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-sky-800 mb-4 text-center">
          Mukunda Boys Hostel — Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-sky-700">Phone number</span>
            <input
              type="tel"
              inputMode="numeric"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 9999999999"
              className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-sky-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <small className="text-xs text-slate-400 mt-1 block">
              (This is a demo — use the dummy credentials below for testing)
            </small>
          </label>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-lg bg-sky-700 hover:bg-sky-600 text-white px-4 py-2 font-medium transition"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-600">
          <p>Quick test logins:</p>
          <div className="mt-2 flex justify-center gap-2">
            <button
              onClick={() => fillDummy("admin")}
              className="px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs hover:bg-sky-200"
            >
              Use Admin
            </button>
            <button
              onClick={() => fillDummy("user")}
              className="px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs hover:bg-sky-200"
            >
              Use User
            </button>
            <button
              onClick={() => fillDummy("warden")}
              className="px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs hover:bg-sky-200"
            >
              Use Warden
            </button>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            Admin: <code className="bg-slate-100 px-1 rounded">9999999999 / admin123</code>
            {" — "}
            User: <code className="bg-slate-100 px-1 rounded">8888888888 / user123</code>
          </div>
        </div>
      </div>
    </div>
  );
}
