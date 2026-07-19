import Image from "next/image";
import { getEvent, getUser } from "@/lib/Data-services";
import {
  FaCalendarCheck,
  FaStar,
  FaUserPlus,
  FaUserShield,
  FaBan,
  FaUserCheck,
} from "react-icons/fa";

async function Activity({ activity }) {
  const { type, created_at, event_id, performed_by, target_user_id, metadata } =
    activity;

  const performedBy = performed_by ? await getUser(performed_by) : null;
  const targetUser = target_user_id ? await getUser(target_user_id) : null;
  const event = event_id ? await getEvent(event_id) : null;

  const formattedTime = new Date(created_at).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const activityMap = {
    registration: {
      icon: FaCalendarCheck,
      color: "bg-blue-100 text-blue-600",
      description: (
        <>
          <span className="font-semibold">{performedBy?.fullName}</span>{" "}
          registered for{" "}
          <span className="font-semibold">
            &quot;{metadata?.eventTitle || event?.title}&quot;
          </span>
          .
        </>
      ),
    },

    review_created: {
      icon: FaStar,
      color: "bg-yellow-100 text-yellow-600",
      description: (
        <>
          <span className="font-semibold">{performedBy?.fullName}</span> left a{" "}
          <span className="font-semibold">{metadata?.rating}-star</span> review
          for{" "}
          <span className="font-semibold">
            &quot;{metadata?.eventTitle || event?.title}&quot;
          </span>
          .
        </>
      ),
    },

    event_created: {
      icon: FaUserPlus,
      color: "bg-green-100 text-green-600",
      description: (
        <>
          <span className="font-semibold">{performedBy?.fullName}</span> created{" "}
          <span className="font-semibold">&quot;{event?.title}&quot;</span>.
        </>
      ),
    },

    role_changed: {
      icon: FaUserShield,
      color: "bg-purple-100 text-purple-600",
      description: (
        <>
          <span className="font-semibold">{performedBy?.fullName}</span> changed{" "}
          <span className="font-semibold">{targetUser?.fullName}</span>&apos;s
          role from <span className="font-semibold">{metadata?.oldRole}</span>{" "}
          to <span className="font-semibold">{metadata?.newRole}</span>.
        </>
      ),
    },

    user_suspended: {
      icon: FaBan,
      color: "bg-red-100 text-red-600",
      description: (
        <>
          <span className="font-semibold">{performedBy?.fullName}</span>{" "}
          suspended{" "}
          <span className="font-semibold">{targetUser?.fullName}</span>.
        </>
      ),
    },

    user_reactivated: {
      icon: FaUserCheck,
      color: "bg-green-100 text-green-600",
      description: (
        <>
          <span className="font-semibold">{performedBy?.fullName}</span>{" "}
          reactivated{" "}
          <span className="font-semibold">{targetUser?.fullName}</span>.
        </>
      ),
    },
    registration_cancelled: {
      icon: FaCalendarCheck,
      color: "bg-orange-100 text-orange-600",
      description: (
        <>
          <span className="font-semibold">{performedBy?.fullName}</span>{" "}
          canceled their registration for{" "}
          <span className="font-semibold">
            &quot;{metadata?.eventTitle || event?.title}&quot;
          </span>
          .
        </>
      ),
    },
  };

  const current = activityMap[type];

  if (!current) return null;

  const Icon = current.icon;

  return (
    <li className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--indigo-200)] hover:shadow-lg">
      {/* Avatar */}
      <div className="relative h-12 w-12 shrink-0">
        <Image
          src={performedBy?.avatar}
          alt={performedBy?.fullName}
          fill
          className="rounded-full object-cover"
        />

        <div
          className={`absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white ${current.color}`}
        >
          <Icon size={11} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="xs:text-[15px] 2xs:text-[13px] text-[11px] leading-6 text-gray-800">
          {current.description}
        </p>

        <p className="mt-2 text-xs text-[var(--text-tertiary)]">
          {formattedTime}
        </p>
      </div>
    </li>
  );
}

export default Activity;
