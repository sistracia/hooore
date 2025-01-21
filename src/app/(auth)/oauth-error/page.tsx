import Link from "next/link";

export default function OAuthErrorPage() {
  return (
    <div className="dd-flex dd-min-h-dvh dd-items-center dd-justify-center dd-text-center">
      <div>
        <div className="dd-my-6 dd-text-center dd-text-sm">
          <span>Email already used, try </span>
          <Link className="dd-font-semibold" href="/login">
            Log In
          </Link>
          <span> with password. </span>
        </div>
      </div>
    </div>
  );
}
