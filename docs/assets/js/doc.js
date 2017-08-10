let Clipboard = require("clipboard");

$(document).on("click", ".ivue-doc-code-toggle", function() {
  $(this).siblings(".ivue-doc-code-content").toggle();
})
let clipboard;
$(document).on("mouseenter", ".ivue-doc-code-copy", function() {
  let $this = $(this);
  clipboard = new Clipboard(".ivue-doc-code-copy", {
    text: function() {
      return $this.siblings(".ivue-doc-code-content").text();
    }
  });
})
$(document).on("mouseleave", ".ivue-doc-code-copy", function() {
  if (clipboard) {
    clipboard.destroy();
  }

})
