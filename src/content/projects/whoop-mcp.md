---
title: "Whoop MCP"
description: "A local Model Context Protocol server for querying personal Whoop health data from AI agents."
tagline: "Your health data, actually useful to an AI agent."
status: "Open Source"
order: 2
cta:
  text: "View on GitHub"
  href: "https://github.com/cbellbell-spin/whoop-mcp"
---

## The Idea

Most health data sits in a silo. Your Whoop account knows how recovered you are, how much strain you took on, and how well you slept last night. But that context doesn't travel anywhere useful unless you manually export it, copy it into a prompt, or build something yourself.

MCP (Model Context Protocol) is an open standard that lets AI agents call external tools and data sources in a structured way. This server bridges your Whoop data and any compatible LLM, so an agent can ask real questions against real data rather than relying on whatever you remember to tell it.

It runs locally. Your data doesn't leave your machine to reach the model.

## What It Enables

A few things become straightforward once an agent has live access to your recovery and strain data:

**Adaptive coaching** — An agent can check your current recovery score before recommending whether today is a good day to push hard or back off.

**Recovery analysis** — Query patterns across weeks of HRV, resting heart rate, and sleep performance without manually exporting anything.

**Training planning** — Build prompts that factor in cumulative strain alongside planned workouts, so load recommendations have context.

**Quantified self workflows** — Chain this with other data sources to build a fuller picture of how training, sleep, and recovery interact over time.

## How It Works

```
Whoop API  →  Local MCP Server  →  Claude / LLM Agent
               (runs on your machine)
```

The server authenticates with the Whoop API using OAuth 2.0, exposes a set of typed tools (recovery, sleep, strain, workouts, profile), and communicates with LLM agents over standard MCP protocol. Because it runs locally, the data flow stays on your hardware until it reaches the model.

## Example Prompts

Once connected to a Claude project or agent, you can ask things like:

- "What has my HRV trend looked like over the past two weeks and is it improving?"
- "Based on yesterday's strain and last night's sleep, should I do my long run today or push it to tomorrow?"
- "Summarize my recovery patterns from the past month. Flag any weeks that look like I was digging a hole."
- "How does my sleep performance on lifting days compare to rest days?"

The README covers setup, OAuth configuration, and how to connect it to a Claude project.

## Where This Goes Next

**Personalized adaptive coach** — Map your goals and coaching preferences once, then pull in health and fitness data from every source you use. An agent that knows your recovery, your training history, and how you like to be pushed is a different thing entirely from a generic AI fitness chatbot.

**Garmin integration** — Pair Whoop recovery data with Garmin's detailed GPS and power metrics for a more complete training picture.

**Apple Health bridge** — Pull in a broader range of passive health signals that Whoop doesn't capture on its own.

**Multi-source correlation** — If you're logging nutrition, mood, or other variables elsewhere, there's an interesting question about what's actually driving recovery variance.
