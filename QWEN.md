# Vasic-Digital GitHub Pages Project

## Project Overview
This repository contains automation scripts for managing the vasic-digital.github.io website. It appears to be a GitHub Pages site with custom automation for commit operations and upstream repository management.

Key components:
- Custom `commit` script for automated Git commits with configurable messages
- Upstream configuration for the GitHub repository
- Environment configuration support via `env.properties`

## Repository Structure
```
Vasic-Digital/
├── commit                    # Custom commit script with environment support
├── README.md               # Project documentation (currently empty)
├── QWEN.md                 # Current file with project context
└── Upstreams/
    └── GitHub.sh           # Defines the upstream repository URL
```

## Key Files and Functionality

### commit script
- A bash script that automates Git commit operations
- Reads configuration from `env.properties` file if available
- Supports default commit messages via `DEFAULT_COMMIT_MESSAGE` environment variable
- Supports project names via `PROJECT_NAME` environment variable
- Usage: `./commit "optional commit message"` or `./commit` for default message

### Upstreams/GitHub.sh
- Exports the upstream repository URL: `git@github.com:vasic-digital/vasic-digital.github.io.git`
- This indicates the project is a GitHub Pages site (based on the `.github.io.git` suffix)

### Environment Configuration
The commit script supports an `env.properties` file in the root directory with variables:
- `DEFAULT_COMMIT_MESSAGE`: Sets the default commit message when no argument is provided
- `PROJECT_NAME`: Prefixes commit messages with the project name

## Development Workflow
This project appears to provide automation for regularly updating the GitHub Pages site with automated commits. The workflow likely involves:
1. Making changes to the repository
2. Using the custom `commit` script to push changes to GitHub
3. Automatic deployment to GitHub Pages via the vasic-digital.github.io repository

## Building and Running
This is primarily a configuration/automation repository. There are no build steps required for the scripts themselves, but they are meant to be executed to automate Git operations.

To use the commit script:
1. Make sure your changes are staged in Git
2. Execute `./commit` or `./commit "Your commit message"`
3. The script will commit and push changes to the upstream repository

## Usage Notes
- The repository is managed by these custom scripts and is meant to sync with the GitHub Pages repository
- SSH keys should be configured for access to the upstream GitHub repository
- The `env.properties` file is optional but can customize commit behavior