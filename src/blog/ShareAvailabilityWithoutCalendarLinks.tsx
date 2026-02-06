import { Article } from './Article'

export function ShareAvailabilityWithoutCalendarLinks() {
  return (
    <Article title="How to Share Your Availability Without Calendar Links">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Not every scheduling situation needs a Calendly link. Sometimes you just want to tell someone when you're free. Here's why text-based availability sharing is often better - and how to do it efficiently.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Problem with Calendar Links</h2>
      <p className="mb-4">
        Calendar booking links are great for certain situations - letting clients or strangers self-schedule without back-and-forth. But they come with friction:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>The other person has to click a link and navigate a booking page</li>
        <li>It can feel impersonal with friends or coworkers</li>
        <li>You need an account with Calendly, Cal.com, etc.</li>
        <li>Sometimes people just want to know when you're free, not book immediately</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Story Behind WTT</h2>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6 border-l-4 border-blue-500">
        <p className="mb-4">
          I kept running into this situation: someone asks "when are you free?" and I need to write out my availability. No Calendly link needed - just text.
        </p>
        <p className="mb-4">
          Writing one slot is easy: "Monday 2-4pm". But multiple times? Different timezones? Clean formatting? That adds up.
        </p>
        <p className="mb-4">
          There was an old tool I used for years that did exactly this. It went offline. I was literally compiling it locally just to keep using it.
        </p>
        <p>
          After one more "when works for you?" message, I finally rebuilt it from scratch with a mobile-first approach. That's <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT - What Time Today</a>.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When Text-Based Sharing Works Better</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Messaging a Friend</h3>
      <p className="mb-4">
        "Want to grab coffee this week? I'm free Tuesday after 2pm or Thursday morning."
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        A Calendly link would be weird here. A quick text is natural.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Responding to a Recruiter</h3>
      <p className="mb-4">
        When a recruiter asks for your availability, they usually want specific times they can pass to the hiring manager - not a booking link.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p>Here's my availability for next week:</p>
        <p>Monday: 10:00 AM - 12:00 PM</p>
        <p>Wednesday: 2:00 PM - 5:00 PM</p>
        <p>Friday: 9:00 AM - 11:00 AM</p>
        <p className="text-gray-500 mt-2">(All times in EST)</p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Coordinating with Coworkers</h3>
      <p className="mb-4">
        On Slack or Teams, dropping your availability as text is faster than sharing a link and waiting for them to book.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">4. International Coordination</h3>
      <p className="mb-4">
        When working across timezones, showing your availability in their timezone avoids confusion:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-6 font-mono text-sm">
        <p>Available times (in your timezone, CET):</p>
        <p>Monday: 4:00 PM - 7:00 PM</p>
        <p>Tuesday: 10:00 AM - 12:00 PM</p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">How to Share Availability as Text (Efficiently)</h2>
      <p className="mb-4">
        You could type it manually, but for multiple slots with clean formatting, use <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a>:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Open WTT</strong> - works on mobile or desktop, no signup</li>
        <li><strong>Select your available time slots</strong> - tap/click on the times you're free</li>
        <li><strong>Add timezone conversion</strong> (optional) - show times in recipient's timezone</li>
        <li><strong>Copy</strong> - formatted text is copied to clipboard</li>
        <li><strong>Paste anywhere</strong> - email, Slack, WhatsApp, text message</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Use Calendar Links Instead</h2>
      <p className="mb-4">
        Text-based sharing isn't always the answer. Use booking links when:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>You're scheduling with many people who need to book 1-on-1 slots</li>
        <li>You want automatic calendar invites created</li>
        <li>You're a business taking appointments from customers</li>
        <li>You need payment collection or forms before booking</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Best of Both Worlds</h2>
      <p className="mb-4">
        Keep both tools in your toolkit:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Quick sharing with specific people:</strong> <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> - text-based, instant</li>
        <li><strong>Letting strangers self-schedule:</strong> Calendly, Cal.com - booking links</li>
      </ul>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Try WTT - What Time Today</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Share your availability as plain text. No signup, no links, works offline.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try it now →
        </a>
      </div>
    </Article>
  )
}
