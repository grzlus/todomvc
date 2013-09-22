MAIN=src/todo_app.coffee
SRC_DIR=src
RELEASE_DIR=release
RELEASE_MAIN="$(RELEASE_DIR)/todo_app.js"

debug:
	sprockets $(MAIN) -I $(SRC_DIR) -o $(RELEASE_DIR)

release:
	sprockets $(MAIN) -I $(SRC_DIR) -o $(RELEASE_DIR) --js-compressor=uglifier

clean:
	rm -f $(RELEASE_DIR)/*

.PHONY: debug release clean
