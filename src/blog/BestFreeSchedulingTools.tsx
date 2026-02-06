import { Article } from './Article'

export function BestFreeSchedulingTools() {
  return (
    <Article title="Best Free Scheduling Tools in 2026">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        You don't need to pay for scheduling software. Here are the best completely free tools for different scheduling needs - from sharing availability to booking meetings.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">100% Free Scheduling Tools</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. WTT - What Time Today (Free Forever)</h3>
      <p className="mb-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> is completely free with no paid tiers, no signup, and no limits. Select your available times and copy them as formatted text.
      </p>
      <p className="mb-2"><strong>What's free:</strong> Everything. There's nothing to pay for.</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Unlimited use</li>
        <li>No account required</li>
        <li>Timezone conversion</li>
        <li>Works offline (PWA)</li>
        <li>Mobile-first design</li>
      </ul>
      <p className="mb-6"><strong>Best for:</strong> Sharing availability via text, email, Slack</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. When2Meet (Free Group Polling)</h3>
      <p className="mb-4">
        The classic group scheduling tool. Create a poll, share the link, everyone marks their availability.
      </p>
      <p className="mb-2"><strong>What's free:</strong> Everything - no paid tier exists</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Unlimited polls</li>
        <li>No signup required</li>
        <li>Visual overlap display</li>
      </ul>
      <p className="mb-6"><strong>Best for:</strong> Finding times that work for groups</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. LettuceMeet (Modern When2Meet)</h3>
      <p className="mb-4">
        A cleaner, more modern version of When2Meet with better mobile support.
      </p>
      <p className="mb-2"><strong>What's free:</strong> Core features</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Group availability polls</li>
        <li>No account for basic use</li>
        <li>Clean interface</li>
      </ul>
      <p className="mb-6"><strong>Best for:</strong> Group scheduling with a better UI</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Free Tiers Worth Using</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">4. Calendly Free</h3>
      <p className="mb-4">
        Calendly's free tier is limited but usable for basic booking links.
      </p>
      <p className="mb-2"><strong>What's free:</strong></p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>1 event type</li>
        <li>Basic calendar integration</li>
        <li>Calendly branding on booking page</li>
      </ul>
      <p className="mb-2"><strong>Limitations:</strong></p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Only one type of meeting</li>
        <li>No team features</li>
        <li>Limited customization</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">5. Cal.com Free</h3>
      <p className="mb-4">
        Open-source Calendly alternative with a more generous free tier.
      </p>
      <p className="mb-2"><strong>What's free:</strong></p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Unlimited event types</li>
        <li>Calendar integrations</li>
        <li>Basic workflows</li>
      </ul>
      <p className="mb-6"><strong>Best for:</strong> People who need booking links without paying</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">6. Doodle Free</h3>
      <p className="mb-4">
        Doodle still has a free tier, though it's more limited than before.
      </p>
      <p className="mb-2"><strong>What's free:</strong></p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Basic polls</li>
        <li>Limited features</li>
        <li>Ads on free tier</li>
      </ul>
      <p className="mb-6"><strong>Limitations:</strong> Account required, ads, limited poll options</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Choosing the Right Free Tool</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-2">Need</th>
              <th className="text-left p-2">Best Free Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Share availability as text</td>
              <td className="p-2"><a href="/" className="text-blue-600 dark:text-blue-400">WTT</a> (100% free)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Group poll (find overlap)</td>
              <td className="p-2">When2Meet or LettuceMeet</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Simple booking link</td>
              <td className="p-2">Calendly Free (1 event type)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Multiple booking links</td>
              <td className="p-2">Cal.com Free</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why WTT is Different</h2>
      <p className="mb-4">
        Most scheduling tools assume you want to create links or polls. But often you just need to tell someone:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-6 font-mono text-sm">
        <p>"I'm free Monday 2-4pm or Tuesday morning. What works for you?"</p>
      </div>
      <p className="mb-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> does exactly this - select your times, copy the text, paste it anywhere. No signup, no links to share, no waiting for someone to fill out a poll.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Try WTT - 100% Free, Forever</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          No signup, no limits, no catch. Just share your availability as text.
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
