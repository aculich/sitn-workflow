#!/bin/bash
# Graceful startup script for sitn-workflow with warmup
# Checks for existing process on port 5678 and handles it gracefully

PORT=5678
APP_NAME="sitn-workflow"

echo "🚀 Starting ${APP_NAME} with warmup on port ${PORT}..."

# Function to find and gracefully stop process on port
stop_existing_process() {
  local port=$1
  local pid=$(lsof -ti:${port} 2>/dev/null)
  
  if [ -n "$pid" ]; then
    echo "⚠️  Found existing process (PID: ${pid}) on port ${port}"
    echo "🛑 Gracefully stopping existing process..."
    
    # Try graceful shutdown first (SIGTERM)
    kill -TERM $pid 2>/dev/null
    
    # Wait up to 5 seconds for graceful shutdown
    for i in {1..5}; do
      if ! kill -0 $pid 2>/dev/null; then
        echo "✅ Process stopped gracefully"
        return 0
      fi
      sleep 1
    done
    
    # If still running, force kill
    if kill -0 $pid 2>/dev/null; then
      echo "⚠️  Process didn't stop gracefully, forcing shutdown..."
      kill -KILL $pid 2>/dev/null
      sleep 1
    fi
  fi
}

# Stop any existing process on our port
stop_existing_process $PORT

# Build first
echo "🔨 Building ${APP_NAME}..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix errors and try again."
  exit 1
fi

echo "✅ Build complete!"
echo "🌐 Starting dev server on port ${PORT}..."
echo ""

# Start dev server
npm run dev
