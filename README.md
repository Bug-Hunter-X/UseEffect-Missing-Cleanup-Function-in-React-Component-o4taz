# React useEffect Cleanup Function Bug

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a cleanup function.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Problem

The `MyComponent` component fetches data on mount and updates the `count` state.  However, it omits the return function in the `useEffect` hook.  This can lead to memory leaks, race conditions, or other unexpected behavior, particularly when the component unmounts before the fetch completes.

## Solution

The corrected `useEffect` hook includes a return function.  This function is executed when the component is unmounted or when the effect is interrupted by a subsequent render.  This ensures that any pending network requests or timers are canceled, preventing potential issues.