---
title: "Cadence"
description: "Cadence is a holistic AI training coach built on Claude. It covers all sides of your training — programs strength sessions to a companion app on your phone, and coaches endurance and mobility from your Whoop and Strava data — whether you're building toward an event or training for longevity."
tagline: "Generic training plans don't know what you actually did last week. Cadence does."
status: "Beta"
order: 2
---

## What is Cadence?

Cadence is a holistic training system built as a Cowork plugin on Anthropic's Claude. It covers all sides of your training, whether you're building toward an event or training for longevity.

Your coach programs strength sessions and pushes them directly to a companion app on your phone — the work is waiting when you walk in. For endurance and mobility, your coach works with you on targets drawn from your Whoop recovery data and Strava history.

## Strength Training Programming

Most training apps tell you what a good workout looks like. Cadence programs your specific next session and sends it before you leave the house. When you get to the gym, the work is already prescribed. No decisions at the door.

## The Companion App

When the coach programs your strength session, it goes directly to a companion app on your phone. Open it at the gym and the work is already laid out: session type, warm-up, main exercises, prescribed sets and reps, and coaching notes for each movement.

The app pulls your previous performance for each exercise so you always know what you did last time. A "Coach Program" card on each exercise shows exactly what was prescribed and why — the load, the rep target, and any contextual note the coach attached.

<img src="/workout-home-screenshot.png" alt="Workout home screen" />
<img src="/workout-exercise-screenshot.png" alt="Exercise detail screen" />

## Ride and Run Analysis

After every ride or run, Cadence pulls your Strava data and goes deeper than the summary screen — tracking how your effort played out, where fitness is building and where fatigue is accumulating. It connects what happened in the session to how you've been recovering off it.

## Recovery Trends

Today's recovery score is one data point. Cadence tracks the pattern beneath it: where strain has been building and how long your HRV has been suppressed — to tell the difference between a rough morning and a body that's been precipitously trending down. One calls for a modified session. The other calls for a longer conversation.

## Training Cycle

Recovery tells you how your body is doing right now. Your training cycle tells you why. Cadence holds the structure of your program: what you're building toward and where you are in the block. It uses that context to make decisions that hold up across a full season. When load needs to come down, it says so before you feel it.

## How It Works

Cadence is a Cowork plugin that runs in the Claude desktop app. For strength training, it programs your next session and pushes it to a companion app on your phone so the work is waiting when you get there. For endurance and mobility, it connects to Whoop and Strava through authenticated integrations and enriches activity data with performance context. Setup takes a few minutes. After that, each session starts from where your data left off.

## The Cadence HUD

The HUD is a Cowork Live Artifact — a persistent, data-pulling view that opens in the Claude desktop app and refreshes each time you load it.

At a glance, it shows your Whoop recovery score, HRV, resting heart rate, SpO₂, sleep quality, and how far out your next event is. From there it generates a single training recommendation — color-coded and specific, with the reasoning stated plainly. Not "you might want to take it easy." More like: "YELLOW — REST — No ride today. 48% yellow · HRV 37.2ms · Taper rule: no riding on yellow, not even Z2."

Below that, the HUD shows how your week is tracking against its goals: cycling volume, strength sessions completed, and any protocol windows you need to hit. It surfaces the last ride's data — power, heart rate, cardiac decoupling, fueling — alongside power zone distribution and any session flags worth noting. The next programmed session sits at the bottom, with specific coaching notes attached.

Everything the HUD shows is live. Open it at any time and it reflects where things actually stand.

<img src="/hud-screenshot.png" alt="The Cadence HUD" />
