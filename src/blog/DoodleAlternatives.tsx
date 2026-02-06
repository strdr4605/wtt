import { Article } from './Article'

export function DoodleAlternatives() {
  return (
    <Article title="Best Doodle Alternatives in 2026">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Doodle has been the go-to for group scheduling polls, but its interface has become cluttered and the free tier increasingly limited. Here are the best alternatives depending on what you actually need.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <p className="text-sm">
          <strong>Not scheduling a group?</strong> If you just need to share your availability with one person, skip the polls entirely. Try{' '}
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
            WTT
          </a> - select times, copy as text, send anywhere.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Look for Doodle Alternatives?</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Cluttered interface</strong> - ads and upsells on the free tier</li>
        <li><strong>Limited free features</strong> - many useful features now require payment</li>
        <li><strong>Overkill for simple needs</strong> - sometimes you just need to tell someone when you're free</li>
        <li><strong>Account required</strong> - creating polls now requires signup</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Best Doodle Alternatives</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. WTT - What Time Today (Best for 1-on-1 Scheduling)</h3>
      <p className="mb-4">
        If you're using Doodle just to share your availability with one or two people, <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> is faster. No poll needed - just select your available times and copy as text.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p>Hey, here's when I'm free:</p>
        <p>Monday: 2:00 PM - 5:00 PM</p>
        <p>Wednesday: 10:00 AM - 12:00 PM</p>
        <p>Thursday: 3:00 PM - 6:00 PM</p>
      </div>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>No signup required</li>
        <li>No link to share - just text</li>
        <li>Timezone conversion built-in</li>
        <li>Works offline</li>
        <li>Free forever</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. When2Meet (Best Free Group Polling)</h3>
      <p className="mb-4">
        The original group availability tool. Simple, no signup, completely free. Interface is dated but it works.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>100% free</li>
        <li>No account needed</li>
        <li>Visual availability grid</li>
        <li>Dated interface, limited mobile support</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. LettuceMeet</h3>
      <p className="mb-4">
        A modern When2Meet alternative with a cleaner interface and better mobile experience.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Clean, modern UI</li>
        <li>Better mobile support</li>
        <li>No signup required</li>
        <li>Free to use</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">4. Cally</h3>
      <p className="mb-4">
        Minimalist meeting polls without the clutter. Simple and focused.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Very simple interface</li>
        <li>No account needed for basic polls</li>
        <li>Calendar integration available</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">5. Calendly (For Booking Links)</h3>
      <p className="mb-4">
        If you need people to book directly on your calendar rather than vote on times, Calendly is the standard.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Direct booking, no voting</li>
        <li>Calendar sync</li>
        <li>Free tier with 1 event type</li>
        <li>Overkill for casual scheduling</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">6. Rally</h3>
      <p className="mb-4">
        Meeting polls with a focus on speed and simplicity.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Quick poll creation</li>
        <li>Clean interface</li>
        <li>Free tier available</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Do You Need a Poll at All?</h2>
      <p className="mb-4">
        Polls make sense when you're coordinating 5+ people. But for most scheduling:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>1-on-1 meeting:</strong> Just text your availability</li>
        <li><strong>Small group (2-3):</strong> A quick message often works faster than a poll</li>
        <li><strong>Large group (4+):</strong> Use a poll tool</li>
      </ul>
      <p className="mb-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> is built for the first two cases - when you just need to share when you're free without the overhead of creating a poll.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Comparison</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-2">Tool</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Best For</th>
              <th className="text-left p-2">Account Required</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2"><a href="/" className="text-blue-600 dark:text-blue-400">WTT</a></td>
              <td className="p-2">Text sharing</td>
              <td className="p-2">1-on-1, quick sharing</td>
              <td className="p-2">No</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">When2Meet</td>
              <td className="p-2">Group poll</td>
              <td className="p-2">Free group scheduling</td>
              <td className="p-2">No</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">LettuceMeet</td>
              <td className="p-2">Group poll</td>
              <td className="p-2">Modern alternative</td>
              <td className="p-2">No</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Doodle</td>
              <td className="p-2">Group poll</td>
              <td className="p-2">Enterprise features</td>
              <td className="p-2">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Skip the poll. Just share your availability.</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          WTT lets you select times and copy them as text. No signup, no links, no waiting for votes.
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
