# NextAuth session undefined in getServerSideProps

This repository demonstrates a bug where NextAuth session is undefined when using `getServerSideProps`, but works correctly with `getStaticProps`.

The issue occurs when fetching the session within `getServerSideProps`.  The session object consistently returns `undefined`, despite functioning as expected in `getStaticProps`.

## Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Attempt to access the protected page.  You'll notice the session is undefined.

## Solution

The solution involves using `getServerSession` from `next-auth` and ensuring correct context is used.