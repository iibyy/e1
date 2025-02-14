const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.StopAnim
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{DesplazarHasta: 0},
	{personaje: 0},
	{Sólido: 0},
	{plataforma: 0},
	{Teclado: 0},
	{pasto: 0},
	{enemigo: 0},
	{cup: 0},
	{limite: 0},
	{cup2: 0}
];

self.InstanceType = {
	personaje: class extends self.ISpriteInstance {},
	plataforma: class extends self.ITiledBackgroundInstance {},
	Teclado: class extends self.IInstance {},
	pasto: class extends self.ITiledBackgroundInstance {},
	enemigo: class extends self.ISpriteInstance {},
	cup: class extends self.ISpriteInstance {},
	limite: class extends self.ITiledBackgroundInstance {},
	cup2: class extends self.ISpriteInstance {}
}