import { Article } from './Article'

export function RemoteWorkersShareAvailability() {
  return (
    <Article title="Best Tools for Remote Workers to Share Availability">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Remote work means async communication. When you can't just tap someone's shoulder, sharing your availability clearly becomes essential. Here are the best tools for remote teams.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Remote Availability Challenge</h2>
      <p className="mb-4">
        In an office, scheduling is easy - you see who's at their desk. Remote work is different:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Teammates are in different timezones</li>
        <li>You can't see who's "around" right now</li>
        <li>Async communication means waiting for responses</li>
        <li>Calendar booking links feel too formal for quick syncs</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Tools for Remote Availability Sharing</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. WTT - What Time Today (Best for Quick Sharing)</h3>
      <p className="mb-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> is perfect for the "when are you free this week?" Slack message. Select your available slots, copy as text, paste into any chat.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p className="text-gray-600 dark:text-gray-400 mb-2">Drop this in Slack:</p>
        <p>Free for a quick sync:</p>
        <p>Monday: 2:00 PM - 4:00 PM EST</p>
        <p>Tuesday: 10:00 AM - 12:00 PM EST</p>
        <p>Thursday: 3:00 PM - 5:00 PM EST</p>
      </div>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>No signup or link sharing</li>
        <li>Built-in timezone conversion</li>
        <li>Works on mobile (for sharing on the go)</li>
        <li>Free forever</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Slack Status + Calendar Integration</h3>
      <p className="mb-4">
        For real-time availability, integrate your calendar with Slack. Your status automatically shows when you're in meetings.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Automatic status updates</li>
        <li>Shows current availability</li>
        <li>Requires Google/Outlook calendar</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Calendly / Cal.com (For External Meetings)</h3>
      <p className="mb-4">
        When clients or candidates need to book time with you, booking links make sense. They see your availability and pick a slot.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Self-service booking</li>
        <li>Calendar sync</li>
        <li>Automatic timezone display</li>
        <li>Too formal for internal team use</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">4. World Time Buddy</h3>
      <p className="mb-4">
        Visual timezone comparison tool. See what time it is for all your teammates at a glance.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Side-by-side timezone view</li>
        <li>Find overlapping work hours</li>
        <li>Free tier available</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">5. Clockwise / Reclaim</h3>
      <p className="mb-4">
        AI-powered calendar tools that automatically protect focus time and find meeting slots.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Automatic scheduling</li>
        <li>Focus time protection</li>
        <li>Team calendar optimization</li>
        <li>More complex setup</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Remote Scheduling Best Practices</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Default to Async</h3>
      <p className="mb-6">
        Before scheduling a meeting, ask: could this be a Slack thread or Loom video instead?
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Share Availability Proactively</h3>
      <p className="mb-4">
        Don't wait for "when are you free?" - share your availability when proposing a sync:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 mb-6">
        <p className="italic">
          "Hey, want to discuss the API changes? I'm free Monday afternoon or Wednesday morning (EST). What works?"
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Always Include Timezone</h3>
      <p className="mb-6">
        Never say "3pm" without specifying the timezone. Even better: convert to the recipient's timezone.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">4. Use the Right Tool for the Situation</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-2">Situation</th>
              <th className="text-left p-2">Best Approach</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Quick sync with a coworker</td>
              <td className="p-2">Text availability via <a href="/" className="text-blue-600 dark:text-blue-400">WTT</a></td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">External client meeting</td>
              <td className="p-2">Calendly booking link</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Team-wide meeting</td>
              <td className="p-2">When2Meet poll</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Recurring 1:1</td>
              <td className="p-2">Calendar invite</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Simple Solution</h2>
      <p className="mb-4">
        Most remote scheduling doesn't need complex tools. For everyday "when can we talk?" moments, <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> is the fastest path:
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>Open WTT (no signup)</li>
        <li>Tap your available times</li>
        <li>Set recipient's timezone (optional)</li>
        <li>Copy and paste into Slack/email</li>
      </ol>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Built for Remote Teams</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          WTT was built mobile-first for sharing availability on the go. Timezone conversion included.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try WTT free →
        </a>
      </div>
    </Article>
  )
}
