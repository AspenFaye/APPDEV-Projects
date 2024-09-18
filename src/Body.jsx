import PropTypes from 'prop-types'

export default function Body(props) {
    return(
        <div className="specifications">
            <img src={props.photo} className="person-picture"></img>
            <p>Our company, <strong>{props.company}</strong>, 
            has developed the <strong>{props.SwitchType}</strong></p>
            <p><strong>{props.Keyboard}</strong> is a high-performance mechanical keyboard designed for gamers, 
professionals, and everyday users who demand precision and comfort.</p>
            <p>It features customizable RGB backlighting, durable mechanical switches,
                 and programmable keys to enhance your typing and gaming experience.</p>

            <p>Specifications:</p>
            <p>SwitchType: {props.SwitchType}</p>
            <p>KeyLayout: {props.KeyLayout}</p>
            <p>Backlighting: {props.Backlighting}</p>
            <p>Connectivity: {props.Connectivity}</p>
            <p>Dimensions: {props.Dimensions}</p>
            <p>Weight: {props.Weight}</p>
            <p>CableLength: {props.CableLength}</p>
            <p>AdditionalFeatures: {props.AdditionalFeatures}</p>
            <br></br>
            <p>In the Box: </p>
            <p>KB-X1000 Keyboard</p>
            <p>USB Cable</p>
            <p>User Manual</p>
            <p>Keycap Removal Tool</p>
            <p>Warranty Card</p>

            <br></br>
            <p>Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors 
and lighting effects.</p>
            <p>Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.</p>
            <p>Programmable Keys: Assign macros and custom functions to any key with the included software.</p>
            <p>Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.</p>
            <p>Dedicated Media Controls: Easily control music and videos with dedicated media keys.</p>

            <br></br>
<p>Setup Instructions</p>
<strong>Unboxing:</strong>
<ul>
    <li>Carefully remove the keyboard and accessories from the box.</li>
Connecting the Keyboard:
    <li>Plug the USB cable into an available USB port on your computer.</li>
    <li>The keyboard should be automatically recognized and ready for use. No additional drivers are 
required.</li>
</ul>

<br></br>
<strong>Software Installation (Optional):</strong>
<ul>
    <li>Download the configuration software from the manufacturer’s website if you wish to customize 
key functions or lighting.</li>
    <li>Follow the on-screen instructions to install the software.</li>
Keycap Removal and Replacement:
    <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</li>
    <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
</ul>

<br></br>
<p>Using the Keyboard</p>
<strong>Basic Typing:</strong>
<ul>
    <li>Simply start typing; the keyboard is pre-configured with standard key mappings.</li>
</ul>

<br></br>
<strong>Customizing Backlighting:</strong>
    <ul>
    <li>Press Fn + F9 to cycle through preset lighting effects.</li>
    <li>Use the configuration software to create custom lighting profiles.</li>
</ul>

<br></br>
<strong>Programming Keys:</strong>
<ul>
    <li>Open the configuration software.</li>
    <li>Select the key you want to program.</li>
    <li>Assign a macro or function and save your changes.</li>
</ul>

<br></br>
<strong>Using Media Controls:</strong>
<ul>
<li>Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.</li>
</ul>

<br></br>
<p>Troubleshooting</p>
<strong>Keyboard Not Responding:</strong>
<ul>
    <li>Ensure the USB connection is secure.</li>
    <li>Try connecting the keyboard to a different USB port</li>
    <li>Restart your computer if necessary.</li>
</ul>

<br></br>
<strong>Backlighting Not Working:</strong>
<ul>
    <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
    <li>Verify that the configuration software is properly installed.</li>
</ul>

<br></br>
<strong>Key Not Registering:</strong>
<ul>
    <li>Confirm that no physical obstructions are affecting the key.</li>
    <li>Test the key in different applications to determine if the issue is software-related.</li>
</ul>

<br></br>
<p>Maintenance and Care</p>
<strong>Cleaning:</strong>
<ul>
    <li>Disconnect the keyboard from the computer.</li>
    <li>Use a soft, dry cloth to clean the surface.</li>
    <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.
</li>
</ul>

<br></br>
<strong>Storage:</strong>
<ul>
    <li>Store the keyboard in a cool, dry place.</li>
    <li>Avoid exposure to liquids or extreme temperatures.</li>
</ul>

<br></br>
<strong>Warranty and Support</strong>
<ul>
    <li>Warranty Period: 2 years from the date of purchase.</li>
    <li>Customer Support: For assistance, contact customer support via the manufacturer’s website 
or call the support hotline at 1-800-555-1234.</li>
</ul>

<br></br>
<p>Manufacturer’s Website: www.keyboardcompany.com
Customer Support Email: support@keyboardcompany.com
Support Hotline: 1-800-555-1234
“Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!”</p>

        </div>
    )
}

