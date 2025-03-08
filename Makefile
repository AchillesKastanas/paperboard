# Install dependencies
install:
    npm install

# Build the project
build:
    npm run build

# Run the development server
dev:
    npm run dev

# Start the project in production mode
start:
    npm run start

# Clean the build artifacts
clean:
    rm -rf .next

# Default: install dependencies, build, and start the app
default: install build start
