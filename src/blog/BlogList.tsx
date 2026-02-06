const articles = [
  {
    slug: 'schedule-meeting-without-email-back-and-forth',
    title: 'How to Schedule a Meeting Without Back-and-Forth Emails',
    description: 'Stop the email ping-pong. Schedule meetings in one message instead of seven.',
    date: '2026-02-06',
  },
  {
    slug: 'lettucemeet-vs-when2meet-vs-wtt',
    title: 'LettuceMeet vs When2Meet vs WTT: Which Should You Use?',
    description: 'Three popular tools for sharing availability compared. When to use each one.',
    date: '2026-01-22',
  },
  {
    slug: 'async-scheduling',
    title: 'Async Scheduling: Share Availability Without Real-Time Coordination',
    description: 'Schedule meetings asynchronously. Share availability once, let them respond when convenient.',
    date: '2026-01-08',
  },
  {
    slug: 'remote-workers-share-availability',
    title: 'Best Tools for Remote Workers to Share Availability',
    description: 'Remote work means async communication. Here are the best tools for sharing availability in distributed teams.',
    date: '2025-12-18',
  },
  {
    slug: 'schedule-meetings-across-time-zones',
    title: 'How to Schedule Meetings Across Time Zones',
    description: 'Share availability across timezones without confusion. Tools and best practices for international teams.',
    date: '2025-11-29',
  },
  {
    slug: 'best-free-scheduling-tools',
    title: 'Best Free Scheduling Tools in 2026',
    description: 'You don\'t need to pay for scheduling. Compare 100% free tools like WTT and When2Meet with free tiers from Calendly.',
    date: '2025-11-12',
  },
  {
    slug: 'share-availability-without-calendar-links',
    title: 'How to Share Availability Without Calendar Links',
    description: 'Not every scheduling situation needs a Calendly link. Learn when text-based availability sharing works better.',
    date: '2025-10-24',
  },
  {
    slug: 'doodle-alternatives',
    title: 'Best Doodle Alternatives in 2026',
    description: 'Compare When2Meet, LettuceMeet, and simpler tools like WTT for sharing availability without creating polls.',
    date: '2025-10-03',
  },
  {
    slug: 'calendly-alternatives',
    title: 'Best Calendly Alternatives in 2026',
    description: 'Compare Cal.com, SavvyCal, Doodle, and simpler tools like WTT for sharing availability without booking links.',
    date: '2025-09-15',
  },
  {
    slug: 'when2meet-alternatives',
    title: '7 Best When2Meet Alternatives in 2026',
    description: 'Compare the best alternatives to When2Meet for scheduling group meetings. Find simpler tools that let you share availability without complex booking links.',
    date: '2025-08-28',
  },
]

export function BlogList() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            &larr; Back to WTT - What Time Today
          </a>
        </div>
      </header>
      <main className="max-w-3xl mx-auto p-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Tips and guides for sharing your availability effectively
        </p>
        <div className="space-y-6">
          {articles.map((article) => (
            <a
              key={article.slug}
              href={`/articles/${article.slug}/`}
              className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                {article.description}
              </p>
              <time className="text-xs text-gray-500">{article.date}</time>
            </a>
          ))}
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 p-4 mt-12">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-500">
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Try WTT - What Time Today
          </a>
          {' '}&middot; Share your availability as plain text
        </div>
      </footer>
    </div>
  )
}
