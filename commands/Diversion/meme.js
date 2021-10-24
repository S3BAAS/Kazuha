const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
            .setName('meme')
                .setDescription('Ve memes.'),
        async run(client, interaction){
            try{

                const memesImagenEspañol = [
                    "https://cdn.discordapp.com/attachments/792519367132708875/796025866235674644/2Q.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796025932678561792/9k.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796026182834847764/tumblr_myvvolenkE1sj0yr5o1_r1_500.png",
                    "https://media.discordapp.net/attachments/765615121669292103/795018931176865842/SPOILER_facherito.png",
                    "https://cdn.discordapp.com/attachments/765615121669292103/795018331496513556/FB_IMG_1607964796786.jpg",
                    "https://media.discordapp.net/attachments/765615121669292103/794722526323933194/FB_IMG_16094532718031152.jpg",
                    "https://media.discordapp.net/attachments/765615099536211978/794655679604195328/FB_IMG_1607911137694.jpg",
                    "https://media.discordapp.net/attachments/724114414856306828/794660435177635880/135220026_3926516507360123_553150247127356355_o.png",
                    "https://cdn.discordapp.com/attachments/765615099536211978/794582552333385738/3de0bb0aba8c1960baf72b139474ac72.jpg",
                    "https://media.discordapp.net/attachments/765615121669292103/794644312548835368/FB_IMG_16094359260001735.jpg",
                    "https://cdn.discordapp.com/attachments/765615121669292103/794635444188741632/IMG-20210101-WA0047.jpg",
                    "https://cdn.discordapp.com/attachments/765615121669292103/794634682523451422/Screenshot_20201217-221957.png",
                    "https://cdn.discordapp.com/attachments/765615121669292103/794631664910336010/FB_IMG_1608657562721.jpg",
                    "https://cdn.discordapp.com/attachments/725240328013217883/783777204710015016/b01e3ec777edf4a3c6627abb3c8a402f.jpg",
                    "https://cdn.discordapp.com/attachments/725240328013217883/783928930318811146/e06213378c898fbcb78060ad1705a3e1.jpg",
                    "https://cdn.discordapp.com/attachments/725240328013217883/786104835913154610/a081df4b6318f126cc48321a13a23072.jpg",
                    "https://cdn.discordapp.com/attachments/725240328013217883/786106713836224512/2e1c50cc1f80951909e571738c12663a.jpg",
                    "https://cdn.discordapp.com/attachments/725240328013217883/786254385243226112/cee8f88d931ae2cbd4161e389f2792b2.jpg",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796029648119136306/Captura_de_Pantalla_2021-01-05_a_las_11.57.31.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796029777597038633/80b3d6acf2ce94549c1d8e92a8eaa3e5.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796030558202626058/95a49e6b2198ecba21d1025d03dca09b.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796031042615902228/maxresdefault.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796031535681241109/Memes-de-Brian-Mala-suerte-14.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796032127153078302/6bdfe22bce297c6e974a78c43c0e724e.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796032540443803698/Captura_de_Pantalla_2021-01-05_a_las_12.09.03.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796032810871554048/9k.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796033033257615370/5efa05a637b0d.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796033341370662933/Captura_de_Pantalla_2021-01-05_a_las_12.12.12.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796034970337542204/5980d58640a45.png",
                    "https://cdn.discordapp.com/attachments/772336555628953610/796373602466922536/ErBMxWRXcAc68WI.png",
                    "https://i.redd.it/icfyd5ihie061.jpg",
                    "https://cdn.discordapp.com/attachments/385837258768515083/796566025088794634/IMG_20210106_194936.jpg",
                    "https://cdn.discordapp.com/attachments/385837258768515083/796527461625233438/aaz6s.jpg",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796747729257889843/memes-feliz-2019_1.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796748451815358484/JGLQVNNDFNE6VPMTAXYBFWLYCE.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796748540835266601/memes-graciosos-de-amor.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796749225055485952/40cde932e17daffc7ccce97d7841bceb.png",
                    "https://cdn.discordapp.com/attachments/410197118263754753/567917758210113551/5cb66c8218c7e.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796749564253700116/Captura_de_Pantalla_2021-01-07_a_las_11.38.09.png",
                    "https://cdn.discordapp.com/attachments/772336555628953610/797463125497479198/cucarachas.png",
                    "https://cdn.discordapp.com/attachments/772336555628953610/797463086758887434/cada_ves_que.png",
                    "https://cdn.discordapp.com/attachments/772336555628953610/797462835054772294/tutorial_para_dejar_de_ser.png",
                    "https://cdn.discordapp.com/attachments/764922241803878430/797433505163509770/FB_IMG_1594446560480.jpg",
                    "https://cdn.discordapp.com/attachments/536338240031031333/797115904634388500/IMG-20201230-WA0706.jpg",
                    "https://cdn.discordapp.com/attachments/536338240031031333/796924037510070302/FB_IMG_1610063318873.jpg",
                    "https://cdn.discordapp.com/attachments/536338240031031333/796751144767586384/FB_IMG_1610019123971.jpg",
                    "https://cdn.discordapp.com/attachments/536338240031031333/796727636088586250/C9-1ZI-XoAI24z3.png",
                    "https://cdn.discordapp.com/attachments/536338240031031333/795458642664620062/e8a85bdbea9f1fbd20a6c86ce2f58546.jpg",
                    "https://cdn.discordapp.com/attachments/536338240031031333/795369765177786389/FB_IMG_1609701293770.jpg",
                    "https://cdn.discordapp.com/attachments/536338240031031333/798206159605596191/f240417d19e09b343d8c75fd56b1f8dc.jpg",
                    "https://cdn.discordapp.com/attachments/536338240031031333/798206479802302496/Captura_de_Pantalla_2021-01-11_a_las_12.07.31.png",
                    "https://cdn.discordapp.com/attachments/536338240031031333/798207111909081109/72638236_3280836618610342_2810338802032706620_n.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/798207313767956510/759d75af8c3dfcc2d8f98ab7dbd4c7294f7bde4dr1-1024-1024v2_hq.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/798207597136183326/Dy5Iz8hW0AAOU1v.png",
                    "https://cdn.discordapp.com/attachments/536338240031031333/798203398078857226/20210108_121155.jpg",
                    "https://cdn.discordapp.com/attachments/536338240031031333/797965793223901194/FB_IMG_1609696551955.jpg",
                    "https://cdn.discordapp.com/attachments/792519367132708875/801090225638998096/jOtCkoE.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/801090681925795870/mnPdPpF.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/801090880496467968/0JsCIY1.png",
                    "https://cdn.discordapp.com/attachments/792519367132708875/801091057433444362/Yq27oKf.png",
                    "https://cdn.discordapp.com/attachments/764614300613607464/800787584073859083/unnamed_7.png",
                    "https://cdn.discordapp.com/attachments/669884258130591767/800297829347491840/FB_IMG_1607114516709.jpg",
                    "https://cdn.discordapp.com/attachments/669884258130591767/800767560278736936/FB_IMG_1610988248051.jpg",
                    "https://media.discordapp.net/attachments/697841778539364382/800750378466410516/FB_IMG_1610955999884.jpg",
                    "https://cdn.discordapp.com/attachments/765615121669292103/802647426900557935/IMG-20210118-WA0115.jpg",
                    "https://cdn.discordapp.com/attachments/765615121669292103/802647997115793428/Ersm34BXUAUGzt3.png",
                    "https://cdn.discordapp.com/attachments/765615121669292103/802649094081347604/20210106_190739.png",
                    "https://cdn.discordapp.com/attachments/765615121669292103/802655464268496946/IMG_20210112_093224_048.jpg",
                    "https://cdn.discordapp.com/attachments/765615121669292103/802657282265579571/141695700_731443957758451_2968351422298277267_n.png",
                    "https://cdn.discordapp.com/attachments/765615121669292103/802658027366907994/SPOILER_SPOILER_Sample9192929292919_9299299209383.png",
                    "https://cdn.discordapp.com/attachments/765615121669292103/803269784275517500/20201230_170256.jpg",
                    "https://cdn.discordapp.com/attachments/765615121669292103/787148991493046312/ough.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/783048265797074954/Venezuela-1.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/783045746378407976/video0-45.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/783043453206397058/videoplayback.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/783043797386657872/lv_0_20201128224339-3.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/783027689711337493/Siempre_camino_flexin_por_la_street720P_HD.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/783026132600750090/video0-3-3.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/794635097097240656/SPOILER_Esto_es_un_party_debajo_del_agua360P.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/794635337912549406/video0_7.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/794636177654415360/InShot_20201228_000805551.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/794643883643895848/Webi_wabo_--_vs_feminista720P_HD.mp4",
                    "https://cdn.discordapp.com/attachments/765615099536211978/794442716771123240/Sin_titulo_4_720p.mp4",
                    "https://cdn.discordapp.com/attachments/765606729526280212/794202368576192542/Facebook_162489942289796MP4_1.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/794721738625384478/video0_4.mp4",
                    "https://cdn.discordapp.com/attachments/765615121669292103/795017593156534302/San_andreas.mp4",
                    "https://cdn.discordapp.com/attachments/765606729526280212/794767098655670272/video0-4-2.mp4",
                    "https://cdn.discordapp.com/attachments/792537650895781918/794978133798420480/VID_20210102_013232.mp4",
                    "https://cdn.discordapp.com/attachments/752941675868848128/767273460165640212/When_two_rocks_look_identical360P_1-2-1.mp4",
                    "https://cdn.discordapp.com/attachments/410197118263754753/715467196574203964/cerraelorto.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/796092364208603156/119985591_802112317269709_5086461620556041486_n.mp4",
                    "https://cdn.discordapp.com/attachments/789532336881401857/791747030531178536/ves_maschina.mp4",
                    "https://cdn.discordapp.com/attachments/792519367132708875/796392132981162034/Troleo_Kronk_Full_HD_4k_1080p_60fps.mp4.mp4",
                    "https://cdn.discordapp.com/attachments/772336555628953610/796361948366635008/6420ffad42dcf9f2c76462e14d7842d9.mp4",
                    "https://cdn.discordapp.com/attachments/676039897584369664/795022810795081768/VID_35030503_170357_530.mp4",
                    "https://cdn.discordapp.com/attachments/385837258768515083/796503319899275284/Angry_German_Kids_dad_Harold_Slikk_Original_VideoDownload-1.mp4",
                    "https://cdn.discordapp.com/attachments/410197118263754753/728136196047241256/aa7284290f986c74ed00ec28939mp4.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/797117562717995028/JAJA_NOPOR_dswddaswdsawdas.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/797100415380488252/magarukun_1346312228220276736480P_1.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/796806346351312976/XD_pedo.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/796548113593794580/video0-47.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/796439653371609108/5_5_PATATA_SONIC_LEGO360P_1.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/796060523874484224/trolleo_benson360P_1.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/798205527607476255/dancing_Coscu.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/798203790314176542/837171-1.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/797859047420330026/Discord_descripcion.mp4",
                    "https://cdn.discordapp.com/attachments/410197118263754753/716918468355555338/when_you_play_Wall-Nut_Bowlingd.mp4",
                    "https://cdn.discordapp.com/attachments/536338240031031333/800762458427621416/VID-20201223-WA0008.mp4",
                    "https://cdn.discordapp.com/attachments/724341381602214118/801645816087445555/adbfc495acf957ecb9234870d4a2e971.mp4",
                    "https://cdn.discordapp.com/attachments/724341381602214118/800234894277869568/video0-2-1-1.mp4",
                    "https://cdn.discordapp.com/attachments/789999799792959488/799533169551474698/police_0.mp4",
                    "https://cdn.discordapp.com/attachments/410197118263754753/721487223794434168/video0-1-3.mp4",
                    "https://cdn.discordapp.com/attachments/779134399681003550/794799289968492575/VID-20201127-WA0018.mp4",
                    "https://cdn.discordapp.com/attachments/764447332288561152/791079547352514630/video0.mp4",
                    "https://cdn.discordapp.com/attachments/775137854284234754/787723705102630922/VID-20201213-WA0000.mp4",
                    "https://cdn.discordapp.com/attachments/773018912237027348/778719749264900165/redditsave.com-aaaaaaaaaaaaaaaaaa-m82nc88xszy51.mp4",
                    "https://cdn.discordapp.com/attachments/698948374908502036/776442585546883112/6143d29bb43fb82a6bded245370e2581.mp4",
                    "https://cdn.discordapp.com/attachments/623874706990301207/773578136670568468/video0_16.mp4",
                    "https://cdn.discordapp.com/attachments/623874706990301207/771810408692056074/video0_-_2020-10-29T232908.469.mp4",
                    "https://cdn.discordapp.com/attachments/670372981729394690/764310442797170708/maruchan_shitposting_oficial-20201009-0002.mp4",
                    "https://cdn.discordapp.com/attachments/505855163098071052/755471868714287204/VID-20200829-WA0218-1.mp4",
                    "https://cdn.discordapp.com/attachments/359424930686828544/736011613018259466/CErrA_eL_OrtO-2.mp4",
                    "https://cdn.discordapp.com/attachments/792519369350578176/803396540546809946/video0.mp4"
                ];
            
            
                const memes = memesImagenEspañol[Math.floor(Math.random() * memesImagenEspañol.length)]
            
                
                return interaction.reply({ content: `${memes}`})

                
            } catch (e){ //Si da error le avisamos al usuario y lo reportamos al servidor
                console.error(e)
                interaction.reply({ embeds: [
                    new MessageEmbed()
                    .setColor(config.defaultErrorColor)
                    .setTitle('Error')
                    .setDescription('Ha ocurrido un error fatal. Esto ha sido comunicado a los desarrolladores. No sigas utilizando este comando por favor.')
                    .setTimestamp()
                    .setFooter(interaction.user.username, interaction.user.avatarURL())
                ]})
            };
        }
    }
 