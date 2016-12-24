import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3><b>UprootHR Style Guide</b></h3>
          <h4>Uses Lato Font: <a href="http://www.latofonts.com/lato-free-fonts/">http://www.latofonts.com/lato-free-fonts/</a></h4>
          <p>Note: Does not showcase components in order to avoid compiling all components for a single page load. Will just show css classes.</p>

          <hr>

          <h3><b>Headers:</b></h3>
          <h1>h1: The quick brown fox jumps over the lazy dog.</h1>
          <h2>h2: The quick brown fox jumps over the lazy dog.</h2>
          <h3>h3: The quick brown fox jumps over the lazy dog.</h3>
          <h4>h4: The quick brown fox jumps over the lazy dog.</h4>
          <h5>h5: The quick brown fox jumps over the lazy dog.</h5>
          <h6>h6: The quick brown fox jumps over the lazy dog.</h6>

          <hr>

          <h3><b>Paragraphs:</b></h3>
          <p>&lt;p&gt;: The quick brown fox jumps over the lazy dog.</p>
          <p><b>bold text &lt;b&gt;: The quick brown fox jumps over the lazy dog.</b></p>
          <p><i>italicized text &lt;i&gt;: The quick brown fox jumps over the lazy dog.</i></p>
          <p class="text-muted">.text-muted: The quick brown fox jumps over the lazy dog.</p>

          <hr>

          <h3><b>Spacing:</b></h3>
          <p>TODO: Show spacing examples...</p>

          <hr>

          <h3><b>Colors:</b></h3>
          <div class="row">
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 bg-lightblue">#C1E1ED<br> .bg-lightblue<br> .text-lightblue</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 bg-lightgreen">#C1E1ED<br> .bg-lightgreen<br> .text-lightgreen</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 bg-green text-white">#273D3B<br> .bg-green<br> .text-green</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 bg-darkgreen text-white">#131919<br> .bg-darkgreen<br> .text-darkgreen</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 bg-orange">#E35C14<br> .bg-orange<br> .text-orange</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 bg-softgray">#F5F8FA<br> .bg-softgray<br> .text-softgray</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 bg-white">#FFFFFF<br> .bg-white<br> .text-white</div>
          </div>

          <hr>

          <h3><b>Cards: (shown with 20px padding, not part of .card class)</b></h3>
          <div class="row">
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 card raise-0 padding">.card.raise-0</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 card raise-1 padding">.card.raise-1</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 card raise-2 padding">.card.raise-2</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 card raise-3 padding">.card.raise-3</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 card raise-4 padding">.card.raise-4</div>
            <div class="tiny-left-buffer tiny-right-buffer tiny-bottom-buffer col-md-3 col-sm-6 card raise-5 padding">.card.raise-5</div>
          </div>




          <!-- Some bottom buffer -->
          <div class="huge-top-buffer"></div>
        </div>
      </div>
    </div>
  `
})
export class StyleGuidePage {}