"use client"

import { CheckCircle, Copy, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

interface AdminSetupSuccessProps {
  email: string
  password: string
}

export default function AdminSetupSuccess({ email, password }: AdminSetupSuccessProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyCredentials = () => {
    const credentials = `Admin Credentials:
Email: ${email}
Password: ${password}
Login URL: ${window.location.origin}/admin/login`

    navigator.clipboard.writeText(credentials)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-4">
        <CheckCircle className="text-green-600" size={24} />
        <h3 className="text-lg font-bold text-green-800">Admin Account Created Successfully!</h3>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <h4 className="font-semibold text-gray-900 mb-3">Your Admin Credentials:</h4>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-600">Email:</label>
              <div className="text-lg font-mono bg-gray-50 p-2 rounded border">{email}</div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Password:</label>
              <div className="flex items-center space-x-2">
                <div className="text-lg font-mono bg-gray-50 p-2 rounded border flex-1">
                  {showPassword ? password : "•".repeat(password.length)}
                </div>
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">Login URL:</label>
              <div className="text-lg font-mono bg-gray-50 p-2 rounded border">
                {window.location.origin}/admin/login
              </div>
            </div>
          </div>

          <button
            onClick={copyCredentials}
            className="mt-4 flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <Copy size={16} />
            <span>{copied ? "Copied!" : "Copy Credentials"}</span>
          </button>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">🔒 Important Security Steps:</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>1. Save these credentials in a secure password manager</li>
            <li>
              2. Test the login at <code>/admin/login</code>
            </li>
            <li>
              3. Delete the setup page file: <code>/app/admin/setup/page.tsx</code>
            </li>
            <li>4. Never share these credentials with anyone</li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <a
            href="/admin/login"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go to Admin Login
          </a>
          <a
            href="/"
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Website
          </a>
        </div>
      </div>
    </div>
  )
}
