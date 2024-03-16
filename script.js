const soyuzBtn = document.getElementById('soyuz-btn');
const shuttleBtn = document.getElementById('shuttle-btn');
const saturnBtn = document.getElementById('saturn-btn');
const soyuzSec = document.getElementById('soyuz-sec');
const shuttleSec = document.getElementById('shuttle-sec');
const saturnSec = document.getElementById('saturn-sec');

soyuzBtn.addEventListener('click', () => {
    const soyuzInfo = document.createElement('p');
    soyuzInfo.innerHTML = "The Soyuz rocket is about 50 meters tall. There are many things that have to happen before the launch. The Soyuz module has many tests on the ground before it is loaded into the launch shroud. Then it is all transported to the building next door. That's where the Soyuz rocket is assembled starting with the four side boosters and the central block, then the smaller block right above it. The smaller block is attached to the launch shroud and the Soyuz rocket, and then the launch escape tower. Let me give you more details about the launch escape tower. If there is an emergency, the launch escape tower lifts the launch shroud and the top two modules of the Soyuz into the sky! The stabilizing grid fins deploy. Then, there are more rocket motors in the launch shroud to lift it even higher. The crew compartment detaches from the bottom and parachutes safely down to the ground. When everything is assembled, the whole Soyuz rocket is transported horizontally on a large train to the launch site. The train is slow enough that you could walk right next to it! This process is called 'the rollout.' It happens 2 or 3 days before the launch." 

    const soyuzInfo2 = document.createElement('p');
    soyuzInfo2.innerHTML = "Mission Control is in Moscow, Russia, but the launch site is in the Baikonur Cosmodrome in Kazakhstan. After the rollout, the rocket is set vertically. Right as the Soyuz gets into place, four support trusses grab hold to stabilize it. The two service arms provide fuel and oxygen. Then the service towers, which provide access to different parts of the Soyuz, rotate up next to the side of the rocket. On the day of the launch, the three crew members will arrive on a bus. They will be wearing sokol space suits. In their left hands, they will be holding a portable cooling unit. This will be used until the moment they get into the Soyuz. The last picture is normally taken on the steps that lead into the elevator that takes them up to the hatch in the launch shroud. The commander is always a Russian cosmonaut. The flight engineers also can be Russian cosmonauts, or an astronaut from another country. They get into their seats about 2 hours before the launch. There are many checks done before the launch. 30 minutes before the launch, the service towers rotate away from the rocket. 15 minutes before the launch, all personnel are evacuated from the launch pad. 30 seconds before the launch, the first service arm is released. 15 seconds before the launch, the second service arm is released. The rocket fires up 8 seconds before it leaves the ground. The four support trusses quickly rotate away to get out of the way."

    const soyuzInfo3 = document.createElement('p');
    soyuzInfo3.innerHTML = "When the Soyuz begins to rise, the crew will feel as much as 3.5 Gs, or 3.5 times the force of gravity on Earth, pushing them into their seats. After the Soyuz starts to rise, it pitches over to the side. After a little bit, the launch escape tower is jettisoned. Now, the four side boosters have no more fuel. They detach shortly after the launch escape tower is jettisoned. This is considered the korolev cross. The launch shroud protected the Soyuz through the atmosphere. Shortly after the korolev cross, the launch shroud falls away, exposing the Soyuz spacecraft. This is the first time the astronauts and cosmonauts will be able to see out of their window into space. The central block continues to fire on its own. Before it finishes, the third stage starts firing while the central block is still attached. This is so that the rocket is always accelerating, which pushes the fuel to the back. The side panels also fall away. A minute or so after, the smaller block shuts off. This is referred to as main engine cutoff, or meco for short. Shortly after, the third stage detaches from the Soyuz. Now the Soyuz is on its own, the antennas and solar panels deploy, and it's heading toward the International Space Station!"

    const soyuzInfo4 = document.createElement('p');
    soyuzInfo4.innerHTML = "The Soyuz has to catch up with the ISS and then dock to it by sending out radar signals. If the radar signals fail, the astronauts and cosmonauts will have to dock it manually. This whole process is called rendezvous and docking. the astronauts and cosmonauts will have spent six months on board the ISS! When the astronauts and cosmonauts are ready to come home, they will get inside the spacecraft, get into their seats, release the hard-dock latches, this is called undocking."

    const soyuzInfo5 = document.createElement('p');
    soyuzInfo5.innerHTML = "All about reentry! As the Soyuz gets to a safe distance from the ISS, the thrusters can be used again the soyuz does a short engine burn. 30 minutes after the short engine burn, the Soyuz rotates ninety degrees. This is to ensure that each module has a different path back to earth. Part of the reason why the service module burns up in the atmosphere is because the it is normally filled with trash from the ISS. It does not have a heat shield. Then the crew will re-enter the earth's atmosphere. After they go through the upper atmosphere, there is a series of parachutes that open. There are two pilot parachutes and one drogue parachute which slows the capsule down enough to open the main parachute. If the main parachute does not work, there is a backup parachute. Two seconds before the capsule touches the ground, they eject the heat shield from the bottom of the capsule. This exposes six soft landing thrusters to help cushion the moment of impact. To also help, the seats rise up on shock absorbers. It's still quite a jolt when they touch down. The recovery crew will be nearby to welcome the astronauts and cosmonauts home. The astronauts and cosmonauts will need help getting out of their seats. Then they can be welcomed back on Earth, and our job here is done!" 
    
    


    soyuzSec.appendChild(soyuzInfo)
    soyuzSec.appendChild(soyuzInfo2)
    soyuzSec.appendChild(soyuzInfo3)
    soyuzSec.appendChild(soyuzInfo4)
    soyuzSec.appendChild(soyuzInfo5)

});

shuttleBtn.addEventListener('click', () => {
    const shuttleInfo = document.createElement('p');
    shuttleInfo.innerHTML = "Shuttle info coming soon!"
    shuttleSec.appendChild(shuttleInfo)
})

saturnBtn.addEventListener('click', () => {
    const saturnInfo = document.createElement('p');
    saturnInfo.innerHTML = "Saturn V info coming soon!"
    saturnSec.appendChild(saturnInfo)
})