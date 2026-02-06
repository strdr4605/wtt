import { Article } from './Article'

export function AsyncScheduling() {
  return (
    <Article title="Async Scheduling: Share Availability Without Real-Time Coordination">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Async work is the future. But scheduling a meeting still often requires real-time back-and-forth. Here's how to schedule asynchronously - share your availability once, let the other person respond when convenient.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">What is Async Scheduling?</h2>
      <p className="mb-4">
        Traditional scheduling looks like this:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p>"When are you free?"</p>
        <p className="text-gray-500">[wait 3 hours]</p>
        <p>"Tuesday or Thursday work?"</p>
        <p className="text-gray-500">[wait 2 hours]</p>
        <p>"Tuesday works. What time?"</p>
        <p className="text-gray-500">[wait 4 hours]</p>
        <p>"How about 2pm?"</p>
        <p className="text-gray-500">[wait 1 hour]</p>
        <p>"Perfect, let's do it."</p>
      </div>
      <p className="mb-4">
        That's 5+ messages spread over hours or days. Async scheduling compresses this:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-6 font-mono text-sm">
        <p>"Want to sync on the API design? Here's when I'm free:</p>
        <p>Tuesday: 10am-12pm, 3-5pm</p>
        <p>Thursday: 2-4pm</p>
        <p>Pick any slot and send a calendar invite."</p>
      </div>
      <p className="mb-6">
        One message. The other person responds when they can. Done.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Async Scheduling Matters</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Timezones:</strong> When you're in NYC and they're in Tokyo, real-time coordination means someone stays up late</li>
        <li><strong>Deep work:</strong> Checking messages every hour for scheduling updates breaks focus</li>
        <li><strong>Efficiency:</strong> One complete message beats five partial ones</li>
        <li><strong>Respect:</strong> Let people respond on their schedule, not yours</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Tools for Async Scheduling</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. WTT - What Time Today (Best for Text-Based Async)</h3>
      <p className="mb-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> lets you share complete availability in one message. Select your free times, copy as formatted text, send via email/Slack/anywhere.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Complete availability in one message</li>
        <li>No link for recipient to click</li>
        <li>Timezone conversion built-in</li>
        <li>Works offline, mobile-first</li>
      </ul>
      <p className="mb-6"><strong>Best for:</strong> Internal team scheduling, quick syncs</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Calendly / Cal.com (Self-Service Booking)</h3>
      <p className="mb-4">
        Share a booking link. The recipient picks a slot whenever convenient, no back-and-forth.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Recipient self-schedules</li>
        <li>Automatic calendar events</li>
        <li>Works across timezones</li>
      </ul>
      <p className="mb-6"><strong>Best for:</strong> External meetings, sales calls, interviews</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. When2Meet / LettuceMeet (Async Polling)</h3>
      <p className="mb-4">
        For groups: create a poll, share the link, everyone marks availability when they can.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Group availability collection</li>
        <li>No real-time coordination needed</li>
        <li>Visual overlap display</li>
      </ul>
      <p className="mb-6"><strong>Best for:</strong> Team meetings, group events</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Async Scheduling Best Practices</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Front-Load Information</h3>
      <p className="mb-4">
        Include everything in your first message:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>What the meeting is about</li>
        <li>Expected duration</li>
        <li>Multiple availability options</li>
        <li>Your timezone (or theirs)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Give Enough Options</h3>
      <p className="mb-4">
        Don't say "Tuesday 2pm?". Offer at least 3-4 options across different days/times:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 mb-6">
        <p>Monday: 10am-12pm</p>
        <p>Tuesday: 2-5pm</p>
        <p>Wednesday: 9-11am</p>
        <p>Thursday: 3-5pm</p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Include a Default</h3>
      <p className="mb-4">
        If you have a preference, say so:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 mb-6 italic text-gray-600 dark:text-gray-400">
        "Tuesday 2pm works best for me, but I'm also free Wednesday morning if that's easier for you."
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">4. Set a Deadline (Optional)</h3>
      <p className="mb-6">
        For time-sensitive scheduling: "Let me know by Friday so I can book the room."
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Async vs Sync: When to Use Each</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-2">Situation</th>
              <th className="text-left p-2">Approach</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Different timezones</td>
              <td className="p-2">Async (text availability or booking link)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Not urgent</td>
              <td className="p-2">Async</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Same office, urgent</td>
              <td className="p-2">Just ask in person</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Complex scheduling (many people)</td>
              <td className="p-2">Async poll (When2Meet)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Schedule Asynchronously with WTT</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Share your complete availability in one message. No back-and-forth needed.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try WTT →
        </a>
      </div>
    </Article>
  )
}
