import { getCurrentUser } from "@/lib/Data-services";
import ProfileFormClient from "./ProfileFormClient";

export default async function ProfileForm() {
  const currentUser = await getCurrentUser();

  return <ProfileFormClient currentUser={currentUser} />;
}
