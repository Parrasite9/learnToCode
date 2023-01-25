# Install Mongo

## Directions

Check to see if you have brew:

```
brew --version
```

If you get something like `command not found: brew`, run:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Otherwise:

```
brew tap mongodb/brew
brew update
brew install mongodb-community@6.0
mongosh
```

If `mongosh` gives you a message containing `MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017`, run:

```
brew services start mongodb/brew/mongodb-community
```
