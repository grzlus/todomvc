MAIN=src/todo_app.coffee
RELEASE_DIR=release
RELEASE_MAIN="$(RELEASE_DIR)/todo_app.js"

debug:
	cpp $(MAIN) | coffee -s -p > $(RELEASE_MAIN)

release:
	cpp $(MAIN) | coffee -s -p | uglifyjs > $(RELEASE_MAIN)

clean:
	rm -f $(RELEASE_DIR)/*

.PHONY: debug release clean
