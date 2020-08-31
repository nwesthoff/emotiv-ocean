# Emotiv Ocean

Based on Neurosity's [Notion Ocean](https://ocean.neurosity.co/).
Built with:

- 🧠 Emotiv Cortex API V2
- ⚡ Next.js

## Try it yourself

I'm assuming you've installed EmotivApps and set up an Emotiv Developer license. When you've done that, create `.env.local` in `ocean-backend` with your Client ID and Secret as such:

```
EMOTIV_CLIENT_ID=your_id
EMOTIV_CLIENT_SECRET=your_secret
```

Simultaneously run the server (in `ocean-backend`) and frontend (in `ocean-frontend`) with:

```
npm run dev
```
