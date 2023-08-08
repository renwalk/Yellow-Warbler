let chirp, amplitude;

function preload() {
  sound = loadSound("YellowWarblerIsolated.wav");
}

function setup() {
  
  let cnv = createCanvas(400,400);
  cnv.mouseClicked(togglePlay);

  amplitude = new p5.Amplitude();

}

function draw() {
  
  background(0);
  noStroke();
  fill('rgb(233,233,30)')
      
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 200);
    
    
  ellipse(width/2, height/2, size*200, size*200);
    
      
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}