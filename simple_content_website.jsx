export default function SimpleContentWebsite() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-black rounded-3xl shadow-xl p-8 md:p-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-400">
            My Website
          </h1>
          <p className="text-green-400 mt-3 text-base md:text-lg">
            
          </p>
        </header>

        <section className="border border-green-500 rounded-2xl p-6 md:p-8 bg-black">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            the greatest scape
          </h2>
          <p className="text-green-400 leading-7 text-base md:text-lg">
            You wake up trapped in a dark room, with a computer glowing in the corner and a locked steel door behind you. A murderer has designed the room like a twisted challenge, leaving only one path to freedom: complete the CTFs. On the screen, a message appears: "Capture the flags, unlock the truth, and earn your escape." Each flag you discover reveals a code that unlocks the next room, forcing you to move from room to room while searching for a way out. The closer you get to solving the CTF challenges, the closer you get to escaping before the murderer returns. In these rooms, your hacking skills are your only way out.</p>
          <p className="text-green-400 leading-7 text-base md:text-lg mt-4">Decrypt this with St3go.</p>
          <p className="text-green-400 leading-7 text-base md:text-lg">
          </p>
        </section>
      </div>
    </div>
  );
}
