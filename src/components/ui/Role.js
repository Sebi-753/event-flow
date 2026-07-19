function Role({ type }) {
  const roles = {
    attendee: {
      title: "Attendee",
      color: "bg-green-100 text-green-700 border-green-200",
      description:
        "Explore events, register for experiences, save favorites, and manage your bookings from one place.",
      permissions: [
        "Browse all public events",
        "Register & cancel registrations",
        "Save favorite events",
        "Leave reviews after attending",
      ],
    },

    organizer: {
      title: "Organizer",
      color: "bg-blue-100 text-blue-700 border-blue-200",
      description:
        "Create and manage events, track registrations, and monitor your event performance through analytics.",
      permissions: [
        "Create & edit events",
        "Manage attendees",
        "View registrations",
        "Access event analytics",
      ],
    },

    admin: {
      title: "Administrator",
      color: "bg-red-100 text-red-700 border-red-200",
      description:
        "Oversee the entire platform, manage users, moderate content, and monitor platform activity.",
      permissions: [
        "Manage all users",
        "Suspend accounts",
        "View platform analytics",
        "Manage every event",
      ],
    },
  };

  const role = roles[type];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="xs:justify-between xs:gap-0 xs:flex-row mb-6 flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold text-gray-900">{role.title}</h2>

        <span
          className={`rounded-full border px-4 py-1 text-sm font-semibold ${role.color}`}
        >
          {role.title}
        </span>
      </div>

      <p className="mb-6 max-w-2xl leading-7 text-gray-600">
        {role.description}
      </p>

      <div>
        <h3 className="mb-3 text-sm font-semibold tracking-wide text-gray-500 uppercase">
          Permissions
        </h3>

        <ul className="grid gap-3 md:grid-cols-2">
          {role.permissions.map((permission) => (
            <li
              key={permission}
              className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700"
            >
              ✓ {permission}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Role;
