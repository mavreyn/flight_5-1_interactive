export type MediaMarker = {
  type: 'photo' | 'video';
  url: string;
  coords: [number, number];
  orientation: 'portrait' | 'landscape';
  thumbnail?: string;
};

export const mediaMarkers: MediaMarker[] = [
  {
    type: 'photo',
    url: '/photos/p1.JPG',
    coords: [28.771946660366456, -81.2501464273481],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p2.JPG',
    coords: [28.772007163615175, -81.2500591779576],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p3.JPG',
    coords: [28.771965694560524, -81.25002746679037],
    orientation: 'landscape',
  },
  {
    type: 'photo',
    url: '/photos/p4.JPG',
    coords: [28.772032700022436, -81.25011530913498],
    orientation: 'landscape',
  },
  {
    type: 'photo',
    url: '/photos/p5.JPG',
    coords: [28.774652798994357, -81.24955900028685],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p6.JPG',
    coords: [28.77887, -81.188014],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p7.JPG',
    coords: [28.771088, -81.149298],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p8.JPG',
    coords: [28.762482, -81.145125],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p9.JPG',
    coords: [28.74354, -81.186057],
    orientation: 'landscape',
  },
  {
    type: 'photo',
    url: '/photos/p10.JPG',
    coords: [28.739024,	-81.21503],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p11.jpg',
    coords: [28.737302,	-81.229517],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p12.jpg',
    coords: [28.734787,	-81.303899],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p13.jpg',
    coords: [28.416231,	-81.474986],
    orientation: 'landscape',
  },
  {
    type: 'photo',
    url: '/photos/p14.jpg',
    coords: [27.053507,	-82.466284],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p15.jpg',
    coords: [28.486152,	-81.82251],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p16.jpg',
    coords: [28.414695,	-81.812601],
    orientation: 'landscape',
  },
  {
    type: 'photo',
    url: '/photos/p17.jpg',
    coords: [28.660034,	-81.456598],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p18.jpg',
    coords: [28.590683,	-81.218491],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p19.jpg',
    coords: [28.599786,	-81.215515],
    orientation: 'portrait',
  },
  {
    type: 'photo',
    url: '/photos/p20.jpg',
    coords: [28.669382, -81.208729],
    orientation: 'landscape',
  },
  {
    type: 'photo',
    url: '/photos/p21.jpg',
    coords: [28.778407,	-81.248743],
    orientation: 'landscape',
  },


  

  {
    type: 'video',
    url: '/videos/v1.mov',
    coords: [28.582331677609904, -81.20119920104597],
    orientation: 'portrait',
    thumbnail: '/videos/v1_t.png',
  },
  {
    type: 'video',
    url: '/videos/v2.mov',
    coords: [28.56736291618214, -81.19551529492574],
    orientation: 'portrait',
    thumbnail: '/videos/v2_t.png',
  },
  {
    type: 'video',
    url: '/videos/v3.MOV',
    coords: [28.781880853741022, -81.21345383642935],
    orientation: 'portrait',
    thumbnail: '/videos/v3_t.png',
  },
  {
    type: 'video',
    url: '/videos/v4.MOV',
    coords: [28.772784011126937, -81.25053581650505],
    orientation: 'landscape',
    thumbnail: '/videos/v4_t.png',
  },
  {
    type: 'video',
    url: '/videos/v5.MOV',
    coords: [28.772113652761778, -81.25011440489959],
    orientation: 'portrait',
    thumbnail: '/videos/v5_t.png',
  },
];