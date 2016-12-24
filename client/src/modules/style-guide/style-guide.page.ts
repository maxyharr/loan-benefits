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
          <p class="small">.small: The quick brown fox jumps over the lazy dog.</p>
          <p class="text-muted">.text-muted: The quick brown fox jumps over the lazy dog.</p>
          <p><b>bold text &lt;b&gt;: The quick brown fox jumps over the lazy dog.</b></p>
          <p><i>italicized text &lt;i&gt;: The quick brown fox jumps over the lazy dog.</i></p>

          <hr>

          <h3><b>Spacing:</b></h3>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <td><b>buffer (margin)</b></td>
                <td>no (0px)</td>
                <td>tiny (5px)</td>
                <td>small (10px)</td>
                <td> (20px)</td>
                <td>big (30px)</td>
                <td>huge (50px)</td>
              </tr>

              <tr>
                <td>top</td>
                <td>.no-top-buffer</td>
                <td>.tiny-top-buffer</td>
                <td>.small-top-buffer</td>
                <td>.top-buffer</td>
                <td>.big-top-buffer</td>
                <td>.huge-top-buffer</td>
              </tr>

              <tr>
                <td>bottom</td>
                <td>.no-bottom-buffer</td>
                <td>.tiny-bottom-buffer</td>
                <td>.small-bottom-buffer</td>
                <td>.bottom-buffer</td>
                <td>.big-bottom-buffer</td>
                <td>.huge-bottom-buffer</td>
              </tr>

              <tr>
                <td>left</td>
                <td>.no-left-buffer</td>
                <td>.tiny-left-buffer</td>
                <td>.small-left-buffer</td>
                <td>.left-buffer</td>
                <td>.big-left-buffer</td>
                <td>.huge-left-buffer</td>
              </tr>

              <tr>
                <td>right</td>
                <td>.no-right-buffer</td>
                <td>.tiny-right-buffer</td>
                <td>.small-right-buffer</td>
                <td>.right-buffer</td>
                <td>.big-right-buffer</td>
                <td>.huge-right-buffer</td>
              </tr>
              <tr>
                <td></td>
                <td>.no-buffer</td>
                <td>.tiny-buffer</td>
                <td>.small-buffer</td>
                <td>.buffer</td>
                <td>.big-buffer</td>
                <td>.huge-buffer</td>
              </tr>
            </tbody>
          </table>

          <table class="table table-bordered">
            <tbody>
              <tr>
                <td><b>padding</b></td>
                <td>no (0px)</td>
                <td>tiny (5px)</td>
                <td>small (10px)</td>
                <td> (20px)</td>
                <td>big (30px)</td>
                <td>huge (50px)</td>
              </tr>

              <tr>
                <td>top</td>
                <td>.no-top-padding</td>
                <td>.tiny-top-padding</td>
                <td>.small-top-padding</td>
                <td>.top-padding</td>
                <td>.big-top-padding</td>
                <td>.huge-top-padding</td>
              </tr>

              <tr>
                <td>bottom</td>
                <td>.no-bottom-padding</td>
                <td>.tiny-bottom-padding</td>
                <td>.small-bottom-padding</td>
                <td>.bottom-padding</td>
                <td>.big-bottom-padding</td>
                <td>.huge-bottom-padding</td>
              </tr>

              <tr>
                <td>left</td>
                <td>.no-left-padding</td>
                <td>.tiny-left-padding</td>
                <td>.small-left-padding</td>
                <td>.left-padding</td>
                <td>.big-left-padding</td>
                <td>.huge-left-padding</td>
              </tr>

              <tr>
                <td>right</td>
                <td>.no-right-padding</td>
                <td>.tiny-right-padding</td>
                <td>.small-right-padding</td>
                <td>.right-padding</td>
                <td>.big-right-padding</td>
                <td>.huge-right-padding</td>
              </tr>
              <tr>
                <td></td>
                <td>.no-padding</td>
                <td>.tiny-padding</td>
                <td>.small-padding</td>
                <td>.padding</td>
                <td>.big-padding</td>
                <td>.huge-padding</td>
              </tr>
            </tbody>
          </table>

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