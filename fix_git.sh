#!/bin/bash

# Navigate to your project directory
cd /Users/radleyle/Desktop/first-vite-react

# Remove all git lock files
find .git -name "*.lock" -delete 2>/dev/null

# Remove any other potential lock files
rm -f .git/index.lock
rm -f .git/MERGE_HEAD.lock
rm -f .git/REBASE_HEAD.lock

# Reset git state
git reset --hard HEAD
git clean -fd

# Test git
echo "Testing git status..."
git status

echo "Git should now be working. If it still hangs, the repository may be corrupted." 