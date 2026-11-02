# Tài nguyên quán nhậu — bản 2

Công cụ: built-in image_gen.

- Nền: `garden-tavern-v2.png`, chỉnh từ `garden-tavern-v1.png`.
- Bộ nhân vật đang dùng: `tavern-people-v2.png` (atlas 2 cột × 3 hàng, alpha trong suốt). `tavern-people-v1.png` giữ lại làm bản gốc.
- Bàn, ghế trống, đồ nhậu và biển loại bàn được vẽ bằng canvas; đầu bếp và phục vụ chuyển động trong cửa bếp.

## Prompt nền

Edit this game background. Preserve the portrait 9:16 composition, tranquil Vietnamese garden at dusk, bamboo left, tree right, distant mountains, warm lanterns, tiled-roof rustic bar/kitchen in upper half, and stone courtyard. REMOVE ALL dining tables, chairs, stools, glasses and dishes in the foreground and both side gardens. Absolutely no decorative tables or chairs anywhere. Leave the entire bottom 60% as clean spacious unobstructed stone courtyard for separately rendered game furniture. The pavilion at the back must look like a small open kitchen, warm lit, visible shelves, stove, chopping board and pots, a clear wide working opening with dark rear wall, countertop at around 38 percent image height. No people (characters will be animated separately), no text or signage. Keep the same beautiful peaceful detailed painterly game environment and color atmosphere. Not a temple.

## Prompt nhân vật

Use case: stylized-concept. Production game sprite atlas on transparent background, exact regular grid TWO columns by THREE rows, portrait aspect ratio 2:3. Six equal square cells. No borders, no text, no labels, no floor, no background. Each individual sprite centered horizontally in its cell, fully isolated, with soles of shoes or stool legs on baseline at 93% of cell height. Entire figure within 8% margins of its cell. Consistent polished semi-realistic illustrated 2.5D Vietnamese cozy tavern game style, elevated frontal three-quarter view, warm soft lighting, friendly ordinary adults. Top left cell: Vietnamese man STANDING in rust-orange casual short sleeve polo, blue jeans, sneakers, arms relaxed. Top right: Vietnamese woman STANDING in sage-green blouse and blue jeans, simple shoes, arms relaxed. Middle left: SAME man in orange polo and jeans SITTING naturally on a simple wooden dining stool, knees bent 90 degrees, feet on ground, hands on thighs, full visible legs and stool, no table. Middle right: SAME woman green blouse jeans SITTING naturally on a wooden stool, knees bent 90 degrees feet on floor, full legs and stool, no table. Bottom left: male kitchen cook STANDING in white short sleeve shirt, white chef hat, dark green apron and dark pants, arms slightly bent as if preparing food. Bottom right: female server STANDING with a small serving tray in one hand, cream shirt and brown apron with dark pants. All six face slightly toward viewer's left; same character scale across all cells, sitting figures naturally shorter than standing figures. Ordinary everyday clothing only, absolutely no religious robes, no Buddhist clothing, no prayer gestures, no crossed legs. True transparent alpha background, no shadows crossing cell boundaries.

## Prompt hoàn thiện alpha

Precise background extraction for this production sprite atlas. Remove ALL dark background, brown gradients, light halos, ground shadows and floor entirely to true fully transparent alpha. Keep ONLY the six human characters and their held objects and the two stools. Preserve exact 1024x1536 2 columns by3 rows composition and original position, scale, clothing, faces, and all character pixels. Do not add anything or change pose. Each sprite must be an isolated clean cutout with crisp antialiased edges, no halo, no rectangles, no backdrop at all. Fully transparent empty space between all sprites.


## Phục vụ nam — tavern-male-server-v1.png

Công cụ: built-in image_gen, transparent_background=true.

Use case: stylized-concept. One single full body Vietnamese male waiter game sprite isolated on fully transparent background. Friendly ordinary adult man, short dark hair, cream rolled-sleeve casual shirt, dark navy-blue waist apron, dark brown trousers and simple brown shoes. Standing in a relaxed walking-ready stance, holding a round serving tray at shoulder level with one hand, tray contains two glasses and a small dish. Full visible body from head to soles, three-quarter frontal view facing slightly left. Polished semi-realistic 2.5D painterly illustrated character for a cozy Vietnamese garden tavern, warm soft lighting, realistic proportions. Character centered with 8 percent clear transparent margin. No text, no labels, no border, no background, no floor, no backdrop, no shadow halo. Ordinary work clothing, no religious clothing. True transparent alpha cutout.
# Phụ bếp riêng — 2026-11-03

Asset: `tavern-kitchen-helper-v1.png`. Công cụ: built-in imagegen, transparent background.

Use case: stylized-concept. Asset type: transparent full-body game character sprite for a tranquil Vietnamese garden tavern. Create one Vietnamese female kitchen assistant, warm softly shaded semi-realistic hand-painted game illustration, three-quarter front view, standing relaxed. White cook skull cap enclosing tied hair, white short-sleeve cook jacket, muted terracotta-red apron, charcoal trousers and flat black kitchen shoes. Holding a stainless mixing bowl of vegetables at waist with one hand, wooden mixing spoon in other hand. Clearly a food-preparation kitchen worker, no serving tray, no beer, no waiter uniform, no tall chef toque. Entire body visible head to shoes, centered with margin, single character, genuine transparent background, no scene, no floor, no glow, no text or watermark.

