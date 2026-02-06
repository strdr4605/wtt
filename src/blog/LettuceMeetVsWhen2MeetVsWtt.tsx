import { Article } from './Article'

export function LettuceMeetVsWhen2MeetVsWtt() {
  return (
    <Article title="LettuceMeet vs When2Meet vs WTT: Which Should You Use?">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Three popular tools for sharing availability, but they solve different problems. Here's when to use each one.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Quick Summary</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-2">Tool</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Best For</th>
              <th className="text-left p-2">Output</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2 font-semibold">When2Meet</td>
              <td className="p-2">Group poll</td>
              <td className="p-2">Large groups</td>
              <td className="p-2">Visual grid</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2 font-semibold">LettuceMeet</td>
              <td className="p-2">Group poll</td>
              <td className="p-2">Groups (better UI)</td>
              <td className="p-2">Visual grid</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2 font-semibold"><a href="/" className="text-blue-600 dark:text-blue-400">WTT</a></td>
              <td className="p-2">Text sharing</td>
              <td className="p-2">1-on-1, quick sharing</td>
              <td className="p-2">Plain text</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">When2Meet</h2>
      <p className="mb-4">
        The original group availability tool, around since 2008. Create an event, share the link, everyone paints their available times on a grid.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Pros</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>100% free, no account needed</li>
        <li>Simple concept everyone understands</li>
        <li>Shows overlapping availability visually</li>
        <li>Works for large groups</li>
      </ul>
      <h3 className="text-lg font-semibold mt-4 mb-2">Cons</h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Dated interface (hasn't changed in years)</li>
        <li>Poor mobile experience</li>
        <li>No timezone handling</li>
        <li>Requires creating and sharing a link</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">LettuceMeet</h2>
      <p className="mb-4">
        A modern When2Meet alternative. Same concept - group availability polling - with a cleaner interface.
      </p>
      <h3 className="text-lg font-semibold mt-4 mb-2">Pros</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Clean, modern UI</li>
        <li>Better mobile support</li>
        <li>No account required for basic use</li>
        <li>Calendar import option</li>
      </ul>
      <h3 className="text-lg font-semibold mt-4 mb-2">Cons</h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Still requires link sharing</li>
        <li>Overkill for 1-on-1 scheduling</li>
        <li>Participants need to visit the link and fill out the grid</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">WTT - What Time Today</h2>
      <p className="mb-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> takes a completely different approach. Instead of creating a poll, you select your available times and copy them as plain text.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p>I'm free:</p>
        <p>Monday: 2:00 PM - 5:00 PM</p>
        <p>Tuesday: 10:00 AM - 12:00 PM</p>
        <p>Thursday: 3:00 PM - 6:00 PM</p>
        <p className="text-gray-500">(EST)</p>
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">Pros</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>No link to share - just paste text anywhere</li>
        <li>No signup required</li>
        <li>Built-in timezone conversion</li>
        <li>Mobile-first design</li>
        <li>Works offline (PWA)</li>
        <li>Fastest option for 1-on-1 scheduling</li>
      </ul>
      <h3 className="text-lg font-semibold mt-4 mb-2">Cons</h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Not designed for group polling</li>
        <li>No visual overlap display</li>
        <li>Text output only (no calendar integration)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Which Should You Use?</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">Use When2Meet when:</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Scheduling with 4+ people</li>
        <li>You need to see everyone's availability overlaid</li>
        <li>You're okay with a dated interface</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Use LettuceMeet when:</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Same as When2Meet, but you want a nicer UI</li>
        <li>Mobile users are participating</li>
        <li>You want calendar import</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Use WTT when:</h3>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Scheduling with 1-2 people</li>
        <li>You want to share via text/Slack/email (no links)</li>
        <li>You need timezone conversion</li>
        <li>You're on mobile and need something fast</li>
        <li>You don't want anyone to fill out a form</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Real Question</h2>
      <p className="mb-4">
        The choice isn't really "which tool is better" - it's "what are you actually trying to do?"
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Finding overlap in a group?</strong> → When2Meet or LettuceMeet</li>
        <li><strong>Telling one person when you're free?</strong> → <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a></li>
      </ul>
      <p className="mb-4">
        Most scheduling is actually the second case. You're not coordinating 10 people's calendars - you're just answering "when are you free this week?"
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Try WTT for Quick Sharing</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Select times, copy text, paste anywhere. No links, no polls, no signup.
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
