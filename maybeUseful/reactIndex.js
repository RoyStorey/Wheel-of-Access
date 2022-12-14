const root = ReactDOM.createRoot(
    document.getElementById('body')
  );

    const bodyStyling = <div className="pageContainer">
        <div className="columnize chartContainer">
            <div className="chartTwo" id="chartTwo"></div>
            <div className="legendContainer">
                <div className="legendColorContainer redBackground"></div>
                <h5>No visibility or monitoring</h5>
                <div className="legendColorContainer yellowBackground"></div>
                <h5>Partial Access</h5>
                <div className="legendColorContainer greenBackground"></div>
                <h5>Full MDT monitoring</h5>
                <div className="legendColorContainer grayBackground"></div>
                <h5>Owned or monitored by different agency</h5>
            </div>
        </div>

        <div className="descriptionContainer">
            <div className="rowize">
                <h1 className="padding">Description:</h1>
                <h1 id="networkName"className="padding underline">Example Network</h1>
            </div>
            <p id="dataDescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam neque ex, mattis eget urna et, commodo aliquam nulla. In ac elit venenatis sem imperdiet pretium. Curabitur non turpis augue. Sed sed cursus nisl. Quisque magna risus, consequat volutpat dolor in, interdum eleifend erat. Quisque fermentum fermentum luctus. Aenean eros sem, malesuada et mattis vitae, blandit nec elit. Quisque imperdiet pellentesque leo ac eleifend. Mauris hendrerit posuere tellus id volutpat. Etiam orci augue, lobortis a eleifend sed, scelerisque vel urna. Aliquam quam libero, rhoncus eu orci finibus, aliquet tempus quam. Suspendisse sagittis tempus odio scelerisque pretium. Vivamus malesuada iaculis turpis, nec pellentesque metus. Aenean ac dolor id ligula tempus commodo. 
                Donec tempor lectus mauris, vel aliquet eros venenatis in. Sed efficitur eget nunc at cursus. Ut non iaculis est. Curabitur gravida felis in quam fringilla condimentum. Donec blandit nec est sed ultricies. Mauris ut leo sit amet arcu ullamcorper accumsan. Aenean fringilla tristique ante eget iaculis. Morbi viverra ornare finibus. Cras imperdiet, mi pellentesque bibendum maximus, tortor mauris venenatis nunc, non euismod est neque sit amet sem. Sed libero arcu, commodo eget nibh id, scelerisque sagittis felis.               
                Vivamus in enim sit amet quam malesuada vehicula. Donec vel lacus lectus. Donec lobortis sem metus, at tempor ligula lobortis sit amet. Ut vehicula mi nec ligula dapibus convallis. Etiam sed ligula at lorem feugiat imperdiet sit amet non eros. Maecenas maximus semper elit. Ut faucibus enim id arcu commodo, in ornare est semper. Sed euismod accumsan lorem vitae porttitor. Vivamus in consectetur erat.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt placerat commodo. Cras aliquam tincidunt justo, nec elementum dolor viverra quis. Nunc sit amet purus nisl. Maecenas interdum consectetur ligula ultrices ullamcorper. Pellentesque mattis nibh a molestie commodo. Nunc tincidunt urna a lacus sollicitudin, eget laoreet enim placerat. Duis quam lacus, ullamcorper vulputate enim sit amet, sollicitudin sodales ipsum. Donec ac eleifend ante. Praesent vitae justo et magna commodo volutpat hendrerit quis quam. Maecenas pharetra tincidunt felis vitae tincidunt. Sed fringilla lacinia arcu, a laoreet dui.
                Mauris eget ligula quis elit tempor ullamcorper. Vivamus arcu leo, scelerisque eu gravida quis, pharetra placerat dui. Sed venenatis elementum aliquet. Nam vitae leo a nibh dapibus semper. Maecenas eget sapien rutrum, rutrum ex non, lacinia orci. Cras in sapien luctus, pellentesque ex sed, pulvinar metus. Nulla lacus enim, maximus vitae feugiat non, suscipit ac augue. Nullam at mi ut lectus efficitur pellentesque condimentum ut risus. </p>
                
            <div className="POCandVisibilityContainer">
                <div className="columnize padding">
                    <h1>Point of Contact</h1>
                    <ul id="dataPOCs">
                        <li>Todd Howard</li>
                        <li>Jen Culvers</li>
                        <li>Bill O'Reilly</li>
                    </ul>
                </div>
                <div className="columnize padding">
                    <h1>Visibility</h1>
                    <p>No visibility or monitoring</p>
                </div>
                <div className="columnize padding">
                    <h1>Completion Criteria</h1>
                    <ul id="dataPOCs">
                        <li>Finalize SOPs</li>
                        <li>100% completion of MQT</li>
                        <li>RMP reviewed</li>
                        <li>Lots more...</li>
                    </ul>
                </div>
            </div>
        </div>
        <script type="module" src="/js/anychart.js"></script>

    </div>

    root.render(bodyStyling);