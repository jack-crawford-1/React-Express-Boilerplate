import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
  const { user } = useAuth0()

  const formatDate = (dateString: string | null) => {
    if (!dateString) return ''
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="mx-auto max-w-4xl bg-gray-800 px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-4xl font-normal text-white">
          Welcome to your profile,{' '}
          <span className="font-extrabold">{user?.given_name}</span>
        </h1>
        <div className="overflow-hidiven rounded-lg bg-white shadow-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="mt-2">
              <img
                className="mx-auto h-32 w-32  rounded-full border-8 border-double border-gray-800"
                src={user?.picture}
                alt="User profile"
              />
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="text-lg text-gray-500">Given Name</div>
                <div className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
                  {user?.given_name}
                </div>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="text-lg text-gray-500">Family Name</div>
                <div className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
                  {user?.family_name}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="text-lg text-gray-500">Nickname</div>
                <div className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
                  {user?.nickname}
                </div>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="text-lg text-gray-500">Email</div>
                <div className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
                  {user?.email}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="text-lg text-gray-500">Email Verified</div>
                <div className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
                  {user?.email_verified ? 'Yes' : 'No'}
                </div>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <div className="text-lg font-medium text-gray-500">
                  Updated At
                </div>
                <div className="mt-1 text-lg text-gray-900 sm:col-span-2 sm:mt-0">
                  {formatDate(user?.updated_at as string)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
