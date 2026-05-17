import { ProfileCard } from "@/components/profile/profile-card"

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-cream">
      <ProfileCard username={params.username} />
    </div>
  )
}
