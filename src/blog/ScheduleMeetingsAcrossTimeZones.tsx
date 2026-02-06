import { Article } from './Article'

export function ScheduleMeetingsAcrossTimeZones() {
  return (
    <Article title="How to Schedule Meetings Across Time Zones">
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Working with people in different timezones? Here's how to share your availability without confusion - and the tools that make it easier.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">The Timezone Problem</h2>
      <p className="mb-4">
        You say "Let's meet at 3pm" but forget to mention which timezone. They think you mean their 3pm. Confusion ensues, meetings are missed.
      </p>
      <p className="mb-4">
        Even worse: you try to convert timezones in your head. "They're in London, that's... 5 hours ahead? Or 8? Wait, is daylight saving active?"
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Solution 1: Share in Their Timezone</h2>
      <p className="mb-4">
        The clearest way to share availability across timezones: show times in the recipient's timezone. They don't have to convert anything.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p className="text-gray-600 dark:text-gray-400 mb-2">For someone in London (GMT):</p>
        <p>Available times:</p>
        <p>Monday: 5:00 PM - 8:00 PM GMT</p>
        <p>Tuesday: 3:00 PM - 6:00 PM GMT</p>
      </div>
      <p className="mb-6">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> does this automatically - select a target timezone and your availability is converted.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Solution 2: Always Include Timezone Labels</h2>
      <p className="mb-4">
        If you share in your own timezone, always label it clearly:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 font-mono text-sm">
        <p>I'm available:</p>
        <p>Monday: 10:00 AM - 1:00 PM EST (UTC-5)</p>
        <p>Tuesday: 2:00 PM - 5:00 PM EST (UTC-5)</p>
      </div>
      <p className="mb-6">
        Including the UTC offset removes all ambiguity.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Solution 3: Use a World Clock</h2>
      <p className="mb-4">
        For ongoing collaboration, keep a world clock showing your teammates' timezones:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>macOS:</strong> Clock app shows multiple cities</li>
        <li><strong>Windows:</strong> Add clocks in taskbar settings</li>
        <li><strong>Web:</strong> timeanddate.com, worldtimebuddy.com</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Tools for Timezone Scheduling</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">WTT - What Time Today</h3>
      <p className="mb-4">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">WTT</a> has built-in timezone conversion. Select your available slots, choose the recipient's timezone, and copy the converted times as text.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Visual time slot picker</li>
        <li>Automatic timezone conversion</li>
        <li>Output as plain text (paste anywhere)</li>
        <li>No signup required</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">World Time Buddy</h3>
      <p className="mb-4">
        Visual tool for comparing multiple timezones side-by-side. Great for finding overlap.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Calendly / Cal.com</h3>
      <p className="mb-4">
        Booking links automatically show times in the viewer's timezone. Good for letting others book, but overkill for quick sharing.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Common Timezone Mistakes</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">1. Forgetting Daylight Saving</h3>
      <p className="mb-4">
        The US, UK, and EU all change clocks at different times. A meeting that worked last month might be off by an hour now.
      </p>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        <strong>Fix:</strong> Use tools that handle DST automatically, or double-check around March/October.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">2. Using City Names Instead of Offsets</h3>
      <p className="mb-4">
        "London time" is GMT in winter, BST in summer. Using UTC offsets is clearer.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">3. Not Specifying AM/PM</h3>
      <p className="mb-4">
        "Let's meet at 3" - is that 3am or 3pm? Always specify, or use 24-hour format.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Quick Timezone Reference</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-2">When it's 12pm in NYC (EST)</th>
              <th className="text-left p-2">It's...</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Los Angeles (PST)</td>
              <td className="p-2">9:00 AM</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">London (GMT)</td>
              <td className="p-2">5:00 PM</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Berlin (CET)</td>
              <td className="p-2">6:00 PM</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Tokyo (JST)</td>
              <td className="p-2">2:00 AM (next day)</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <td className="p-2">Sydney (AEDT)</td>
              <td className="p-2">4:00 AM (next day)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Share Availability Across Timezones</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          WTT converts your availability to any timezone. Select times, choose their timezone, copy and send.
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
