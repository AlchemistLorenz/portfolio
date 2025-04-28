import Link from 'next/link';

export default function SecretPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-dark-extra text-off-white">
            <h1 className="text-4xl font-bold mb-4">Who Told You About This?</h1>
            <p className="mb-6">Here's Your Reward, Nothing Gets Past You Huh?</p>
            <Link href="/" className="px-4 py-2 bg-[#BB4430] rounded hover:bg-[#EB5E28]">
            Back Home
            </Link>
        </main>
    );
}