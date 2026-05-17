export interface User {
  id: string
  name: string
  email: string
  phone: string
  password: string
  createdAt: string
}

const USERS_KEY = "vivahlipi_users"
const SESSION_KEY = "vivahlipi_session"

export function getUsers(): User[] {
  if (typeof window === "undefined") return []
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]")
  } catch {
    return []
  }
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

export function registerUser(name: string, email: string, phone: string, password: string): { ok: boolean; error?: string } {
  const users = getUsers()
  if (users.find((u) => u.email === email)) {
    return { ok: false, error: "Email already registered. Please login." }
  }
  const user: User = {
    id: "user_" + Date.now(),
    name,
    email,
    phone,
    password,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  saveUsers(users)
  return { ok: true }
}

export function loginUser(email: string, password: string): { ok: boolean; error?: string; user?: User } {
  const users = getUsers()
  const user = users.find((u) => u.email === email)
  if (!user) return { ok: false, error: "No account found with this email." }
  if (user.password !== password) return { ok: false, error: "Incorrect password." }
  localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: user.id, email: user.email, name: user.name }))
  return { ok: true, user }
}

export function getSession(): { userId: string; email: string; name: string } | null {
  if (typeof window === "undefined") return null
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null")
  } catch {
    return null
  }
}

export function logoutUser() {
  localStorage.removeItem(SESSION_KEY)
}

export function isLoggedIn(): boolean {
  return getSession() !== null
}
