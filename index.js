// Import stylesheets
import './style.css';

// Table of Contents
const toc =  document.querySelector('#toc');
const headings = document.querySelectorAll('h2');


/**
 * Get the heading ID or create one if it doesn't
 * @param {Node} elem The getElementById
 * @return {String} The ID
 */
const getID = function(elem) {
  // If the element doesn't have an ID, create one
    if(!elem.id) {
      elem.id = elem.textContent.replace(new RegExp(' ', 'g'), '-');
      // Get the elementID 
    }
    return elem.id;
};

// Loop through all of the headings and create an array of table of contents items
const tocItems = Array.prototype.map.call(headings, function(heading){
  return `<li><a href="#${getID(heading)}">${heading.textContent}</a></li>`
});

// Inject table of contents into the DOM
if(toc && tocItems.length > 0 ) {
  toc.innerHTML = `<h2>Table of Contents</h2>
                    <ul>${tocItems.join('')}</ul>`
}