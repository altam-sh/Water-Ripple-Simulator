# Interactive Water Ripple Simulation

### Project by Altamash Sheikh 
Personal Computer Graphics Project Submitted as Final Project for COMP 438/6381 at Concordia University

[Demo Video Link](https://youtu.be/jVUlNFdEpEA)

## Overview  
This project is an **interactive water ripple simulation** built using **libigl (C++)**. The goal is to simulate realistic **wave-like ripples** on a 3D surface, triggered by user interaction. Clicking on the surface generates ripples that spread, interact, and fade over time, mimicking the behavior of real water.

---

## Features  
- **Click to Create Ripples**
  - Left-click anywhere on the surface to generate a ripple.  
- **Adjustable Ripple Intensity**   
  - `Q` - Decrease ripple intensity  
  - `E` - Increase ripple intensity  
- **Pause/Resume Simulation**   
  - `Space` - Toggle pause/resume  
- **Realistic Wave Dynamics**   
  - Ripples interact, overlapping waves amplify or cancel out.  
  - Gradual wave decay for a smooth, natural fade-out.
- **Reset surface to Default**
  - `R` - Resets surface to Default (flat)
  - Useful to clear ripples/waves from surface   

---

## How It Works  
The simulation is based on a **triangular mesh plane** that deforms dynamically. When a user clicks:  
1. **A damped sine wave function** is applied to simulate a ripple at the clicked location.  
2. The ripple spreads outward, modifying vertex positions in real time.  
3. Overlapping waves **combine (constructive interference)** or **cancel out (destructive interference)**.  
4. The wave amplitude gradually **decays** to simulate realistic water behavior.  

---

## Installation & Usage  

### Requirements  
- C++ compiler  
- CMake  
- libigl  

### Build Instructions  
```sh
git clone https://github.com/altam-sh/WaterRippleSimulator.git
cd libigl-example-project
cd build
rmdir /S
cmake ..
make
./WaterRippleSimulator
```
From there, simply navigate to `\libigl-example-project\build\Debug` and run the `example.exe`

**Note**: If the build fails or the `cmake ..` command is causing issues, I've found success running the following command instead:
```sh
cmake -DCMAKE_POLICY_VERSION_MINIMUM="3.5" ..
```

### Running the Simulation
Once launched, left-click to generate ripples, adjust intensity with `Q`/`E`, and pause/resume with `Space`.

You can also 
- **Zoom in and out** with the mouse scroll wheel
- **Pan the camera** by dragging mouse 
- **Rotate view** by dragging with right click

## Known Issue & Troubleshooting

### Ripple Positioning Bug 
- Sometimes, when moving the camera, ripples may not appear at the expected position.
- The terminal will display a warning when clicks fail to register on the mesh.
- **Solution**: If this happens, it's best to restart the application.

## Why This Project?

I've always been impressed by **real-time physics simulations** and how simple mathematical functions can create visually engaging effects. 
To me, they serve to blur the difference between the **physical, natural world**, and the **digital world**. It's easy to overlook everything that goes into replicating the various realities that come by default in the world. 
Having no experience myself with what exactly it took to produce them, computer graphics have always been an interesting enigma of sorts, so I took this opportunity enlighten myself.

This project was a deep dive into mesh deformation, interaction, and wave physics, with plenty of technical challenges along the way.
All valuable skills to gain experience in, all the while producing a visually engaging project which was important to me.

Water ripples are often associated with calmness, and the mundane phenomenon is something that's always fascinated me. 
The **wishing well** representing a personal symbol of mine, the ripples on the surface of water seemed like a sound place to start.

# [Thank you for your interest!]
