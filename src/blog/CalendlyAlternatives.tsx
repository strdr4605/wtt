import { Article } from './Article'

export function CalendlyAlternatives() {
  return (
    <Article title="Best Calendly Alternatives in 2026">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Calendly revolutionized scheduling with booking links, but it's not always what you need. Sometimes you just want to tell someone "I'm free Monday 2-4pm" without sending them a link. Here are the best alternatives for different use cases.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <p className="text-sm">
          <strong>Quick take:</strong> If you just need to share availability as text (no booking links), try{' '}
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
            WTT - What Time Today
          </a>. Select times, copy, paste anywhere.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Look for Calendly Alternatives?</h2>
      <p className="mb-4">
        Calendly is excellent for professionals who schedule lots of external meetings. But many users find it:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Overkill for casual scheduling</strong> - texting a friend doesn't need a booking link</li>
        <li><strong>Too formal</strong> - sending a Calendly link to a coworker can feel impersonal</li>
        <li><strong>Limited on free tier</strong> - only one event type without paying</li>
        <li><strong>Requires the other person to click through</strong> - some people just want a text reply</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Best Calendly Alternatives</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. WTT - What Time Today (Best for Text-Based Sharing)</h3>
      <p className="mb-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> solves a different problem than Calendly. Instead of creating booking links, you select your available times and copy them as formatted text.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p className="text-gray-600 dark:text-gray-400 mb-2">Example output:</p>
        <p>I'm available:</p>
        <p>Monday, Feb 10: 2:00 PM - 5:00 PM</p>
        <p>Tuesday, Feb 11: 10:00 AM - 12:00 PM</p>
        <p className="text-gray-500 mt-2">(EST - convert to your timezone)</p>
      </div>
      <p className="mb-4"><strong>Best for:</strong> Quick sharing via text, email, Slack, Discord</p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>No signup required</li>
        <li>Works offline (PWA)</li>
        <li>Built-in timezone conversion</li>
        <li>Free forever</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Cal.com (Best Open-Source Alternative)</h3>
      <p className="mb-4">
        Cal.com is the closest direct Calendly alternative. It's open-source, so you can self-host it or use their cloud version.
      </p>
      <p className="mb-4"><strong>Best for:</strong> Teams wanting Calendly features with more control</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Open source</li>
        <li>Self-hosting option</li>
        <li>Team scheduling</li>
        <li>More generous free tier than Calendly</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. SavvyCal</h3>
      <p className="mb-4">
        SavvyCal focuses on making scheduling feel more personal. Recipients can overlay their own calendar to find times that work.
      </p>
      <p className="mb-4"><strong>Best for:</strong> People who want booking links but find Calendly too cold</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Calendar overlay for recipients</li>
        <li>Personalized scheduling pages</li>
        <li>Ranked availability</li>
        <li>Paid plans only</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">4. Doodle</h3>
      <p className="mb-4">
        Doodle is better for group polling than 1-on-1 booking. Create a poll with times, share the link, and everyone votes.
      </p>
      <p className="mb-4"><strong>Best for:</strong> Finding times that work for multiple people</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Group polling</li>
        <li>No calendar integration required for participants</li>
        <li>Free tier available</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">5. Tidycal</h3>
      <p className="mb-4">
        Tidycal is a simpler, cheaper Calendly alternative with a one-time payment option.
      </p>
      <p className="mb-4"><strong>Best for:</strong> Budget-conscious users who need booking links</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Lifetime deal available</li>
        <li>Simple interface</li>
        <li>Basic integrations</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">6. Acuity Scheduling</h3>
      <p className="mb-4">
        Now owned by Squarespace, Acuity is feature-rich and popular with service businesses.
      </p>
      <p className="mb-4"><strong>Best for:</strong> Businesses that need payments, forms, and client management</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Payment integration</li>
        <li>Custom intake forms</li>
        <li>Client self-scheduling</li>
        <li>No free tier</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Do You Actually Need a Booking Link?</h2>
      <p className="mb-4">
        Here's a thought: booking links solve a specific problem - letting strangers or clients self-schedule without back-and-forth. But for friends, coworkers, or even recruiters you're already talking to, a simple text often works better:
      </p>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
        <p className="italic text-gray-600 dark:text-gray-400">
          "Hey, I'm free Monday 2-4pm or Tuesday morning. What works for you?"
        </p>
      </div>
      <p className="mb-4">
        That's the idea behind <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a>. No links, no signups, no friction. Just select your times, copy the text, and send it however you want.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Comparison Table</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-2">Tool</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Best For</th>
              <th className="text-left p-2">Free Tier</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2"><a href="/" className="text-blue-600 dark:text-blue-400">WTT</a></td>
              <td className="p-2">Text output</td>
              <td className="p-2">Quick sharing</td>
              <td className="p-2">100% free</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Cal.com</td>
              <td className="p-2">Booking links</td>
              <td className="p-2">Teams, self-host</td>
              <td className="p-2">Yes</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">SavvyCal</td>
              <td className="p-2">Booking links</td>
              <td className="p-2">Personal touch</td>
              <td className="p-2">No</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Doodle</td>
              <td className="p-2">Polling</td>
              <td className="p-2">Group scheduling</td>
              <td className="p-2">Yes</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Tidycal</td>
              <td className="p-2">Booking links</td>
              <td className="p-2">Budget option</td>
              <td className="p-2">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Try WTT - What Time Today</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Share your availability as plain text. No booking links needed.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try it free →
        </a>
      </div>
    </Article>
  )
}
