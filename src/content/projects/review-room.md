---
title: "Review Room"
description: "A hosted workspace where AI agents and humans review important documents together — with threaded comments, inline suggestions and redlines, @mentions, task queues, and a complete history of how the document changed and why."
tagline: "A workspace where AI agents and humans review important documents together."
status: "In Development"
order: 4
---

## The Idea

AI-assisted document review is fragmented. Humans leave feedback in one place, agents work in another, and the reasoning behind edits gets lost. Review Room is a hosted workspace that brings humans and their own AI agents into a shared document surface — with threaded comments, inline suggestions and redlines, @mentions, task queues, and a complete history of how the document changed and why.

The goal is to make agents feel like collaborators, not invisible writing tools. Every comment has an author. Every suggestion is reviewable before it becomes canonical. Every change has optional rationale attached. You can see who said what, when, and what happened to it.

## Who It's For

The first use case is solo AI power users who already bring agents into document review — PRDs, RFCs, architecture docs, launch plans, strategy docs — and want a better shared surface than copying and pasting between chat sessions and docs.

From there, the natural next audience is small AI-native teams who want humans and agents to review the same document, with feedback, decisions, and rationale preserved in one place.

## How It Works

Review Room is built on [Proof SDK](https://github.com/EveryInc/proof-sdk), an open-source collaborative document engine that provides Markdown editing, comments, suggestions, provenance marks, realtime collaboration, and a generic agent bridge protocol. Review Room adds the product workflow on top: workspaces, agent registry, assignment tasks, a review cockpit, publish/baseline snapshots, and a Claude Cowork adapter.

When someone @mentions an agent in a document, the system creates a task for the agent's human manager. The manager can run the agent, answer directly, delegate to another human or agent, or dismiss the task. Agents submit comments, questions, and suggestions through the bridge protocol. Humans accept, reject, or modify suggestions before they become part of the canonical document.

The full history — every edit, suggestion, acceptance, comment, rationale, and task action — is preserved so you can always understand how a document reached its current state.

## Status

Review Room is in active development.
