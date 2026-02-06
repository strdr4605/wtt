import { Article } from './Article'

export function ScheduleMeetingWithoutEmailBackAndForth() {
  return (
    <Article title="How to Schedule a Meeting Without Back-and-Forth Emails">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        We've all been there: 7 emails just to find a 30-minute meeting slot. Here's how to schedule in one message instead of a thread.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Back-and-Forth Problem</h2>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-6 font-mono text-sm space-y-2">
        <p><span className="text-blue-600">You:</span> "When are you free to discuss the project?"</p>
        <p><span className="text-green-600">Them:</span> "Maybe Tuesday or Wednesday?"</p>
        <p><span className="text-blue-600">You:</span> "Tuesday works. Morning or afternoon?"</p>
        <p><span className="text-green-600">Them:</span> "Afternoon is better."</p>
        <p><span className="text-blue-600">You:</span> "2pm or 3pm?"</p>
        <p><span className="text-green-600">Them:</span> "3pm works."</p>
        <p><span className="text-blue-600">You:</span> "Great, sending invite now."</p>
      </div>
      <p className="mb-6">
        That's 7 messages over potentially days. There's a better way.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Solution 1: Share Complete Availability Upfront</h2>
      <p className="mb-4">
        Instead of asking "when are you free?", share your availability in the first message:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p>"Want to discuss the project? Here's when I'm free:</p>
        <p className="mt-2">Tuesday: 2:00 PM - 5:00 PM</p>
        <p>Wednesday: 10:00 AM - 12:00 PM</p>
        <p>Thursday: 3:00 PM - 4:30 PM</p>
        <p className="mt-2">Pick any time and I'll send a calendar invite."</p>
      </div>
      <p className="mb-4">
        Now they can respond with a specific time. Two messages total.
      </p>
      <p className="mb-6">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> makes this easy - select your available slots, copy as formatted text, paste into your email.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Solution 2: Use a Booking Link</h2>
      <p className="mb-4">
        For external contacts or when you want them to book directly:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-6 font-mono text-sm">
        <p>"Want to discuss the project? Book a time that works for you:</p>
        <p className="text-blue-600 mt-2">calendly.com/yourname/30min</p>
      </div>
      <p className="mb-6">
        They click, pick a slot, done. Calendar invite sent automatically.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Solution 3: Propose a Specific Time</h2>
      <p className="mb-4">
        If you have a strong preference, lead with it:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-6 font-mono text-sm">
        <p>"Can we meet Tuesday at 2pm to discuss the project? If that doesn't work, I'm also free Wednesday morning."</p>
      </div>
      <p className="mb-6">
        Best case: they say yes and it's done. Worst case: they counter with their availability.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">When to Use Each Approach</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-2">Situation</th>
              <th className="text-left p-2">Best Approach</th>
              <th className="text-left p-2">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Coworker, friend</td>
              <td className="p-2">Text availability</td>
              <td className="p-2"><a href="/" className="text-blue-600 dark:text-blue-400">WTT</a></td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Client, external</td>
              <td className="p-2">Booking link</td>
              <td className="p-2">Calendly, Cal.com</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Quick sync, flexible</td>
              <td className="p-2">Propose specific time</td>
              <td className="p-2">Just email</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Group meeting</td>
              <td className="p-2">Availability poll</td>
              <td className="p-2">When2Meet</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Tips for One-Message Scheduling</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Include Multiple Options</h3>
      <p className="mb-6">
        Don't just say "Tuesday afternoon?" - offer 3-4 options across different days. This increases the chance one works.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Specify Duration</h3>
      <p className="mb-6">
        "30-minute call" or "1-hour meeting" helps them know how much time to block.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Include Timezone</h3>
      <p className="mb-6">
        Always specify: "2pm EST" not just "2pm". Or use <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> to convert to their timezone.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">4. Make It Easy to Say Yes</h3>
      <p className="mb-4">
        End with a clear action:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>"Pick any time and I'll send an invite"</li>
        <li>"Just reply with what works and I'll set it up"</li>
        <li>"Click the link above to book"</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Fastest Way</h2>
      <p className="mb-4">
        For most scheduling, <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> is the fastest path to "one message and done":
      </p>
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        <li>Open WTT (no signup needed)</li>
        <li>Tap your available time slots</li>
        <li>Copy the formatted text</li>
        <li>Paste into your email/Slack/text</li>
        <li>Hit send</li>
      </ol>
      <p className="mb-6">
        Total time: about 20 seconds. Emails saved: at least 5.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">End the Back-and-Forth</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          WTT lets you share complete availability in one message. No links, no signup.
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
