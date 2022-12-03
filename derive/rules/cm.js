// exemplars: https://unicode-org.github.io/cldr-staging/charts/latest/by_type/core_data.alphabetic_information.main.html
// note: these can be arbitrary length sequences
export const CM_WHITELIST = [

	// === Latn ===
	// note: this is only a subset of the exemplars
	// 20221104: checked English, German, French, Spanish, Portuguese, 
	//   Irish, Danish, Croatian, Dutch, Polish, Italian
	// 20221202: relaxed slightly, added some more variants
	//   TODO: breve/caron equivalence mapping? "agu"

	'à', // E0 (à) LATIN SMALL LETTER A WITH GRAVE
	'á', // E1 (á) LATIN SMALL LETTER A WITH ACUTE
	'â', // E2 (â) LATIN SMALL LETTER A WITH CIRCUMFLEX
	'ã', // E3 (ã) LATIN SMALL LETTER A WITH TILDE
	'ā', // 101 (ā) LATIN SMALL LETTER A WITH MACRON
	'ä', // E4 (ä) LATIN SMALL LETTER A WITH DIAERESIS
	'å', // E5 (å) LATIN SMALL LETTER A WITH RING ABOVE
	'ă', // 103 (ă) LATIN SMALL LETTER A WITH BREVE
	//'ǎ', // 1CE (ǎ) LATIN SMALL LETTER A WITH CARON (20221202: enabling breve instead)
	'ą', // 105 (ą) LATIN SMALL LETTER A WITH OGONEK (20221202: added for polish)

	'ć', // 107 (ć) LATIN SMALL LETTER C WITH ACUTE
	'ĉ', // 109 (ĉ) LATIN SMALL LETTER C WITH CIRCUMFLEX
	'č', // 10D (č) LATIN SMALL LETTER C WITH CARON
	'ç', // E7 (ç) LATIN SMALL LETTER C WITH CEDILLA

	//'đ', // 111 (đ) LATIN SMALL LETTER D WITH STROKE (vietnamese)

	'è', // E8 (è) LATIN SMALL LETTER E WITH GRAVE
	'é', // E9 (é) LATIN SMALL LETTER E WITH ACUTE
	'ê', // EA (ê) LATIN SMALL LETTER E WITH CIRCUMFLEX
	'ẽ', // 1EBD (ẽ) LATIN SMALL LETTER E WITH TILDE
	'ē', // 113 (ē) LATIN SMALL LETTER E WITH MACRON
	'ë', // EB (ë) LATIN SMALL LETTER E WITH DIAERESIS
	'ě', // 11B (ě) LATIN SMALL LETTER E WITH CARON
	'ę', // 119 (ę) LATIN SMALL LETTER E WITH OGONEK (20221202: added for polish)

	'ğ', // 11F (ğ) LATIN SMALL LETTER G WITH BREVE (20221202: added for turkish/azer)

	'ì', // EC (ì) LATIN SMALL LETTER I WITH GRAVE
	'í', // ED (í) LATIN SMALL LETTER I WITH ACUTE
	'î', // EE (î) LATIN SMALL LETTER I WITH CIRCUMFLEX
	'ï', // EF (ï) LATIN SMALL LETTER I WITH DIAERESIS
	'ǐ', // 1D0 (ǐ) LATIN SMALL LETTER I WITH CARON

	//[NOT COMPOSED] 'ł', // 142 (ł) LATIN SMALL LETTER L WITH STROKE

	'ǹ', // 1F9 (ǹ) LATIN SMALL LETTER N WITH GRAVE
	'ń', // 144 (ń) LATIN SMALL LETTER N WITH ACUTE
	'ñ', // F1 (ñ) LATIN SMALL LETTER N WITH TILDE

	'ò', // F2 (ò) LATIN SMALL LETTER O WITH GRAVE
	'ó', // F3 (ó) LATIN SMALL LETTER O WITH ACUTE
	'ô', // F4 (ô) LATIN SMALL LETTER O WITH CIRCUMFLEX
	'õ', // F5 (õ) LATIN SMALL LETTER O WITH TILDE
	'ö', // F6 (ö) LATIN SMALL LETTER O WITH DIAERESIS
	'ǒ', // 1D2 (ǒ) LATIN SMALL LETTER O WITH CARON
	'ō', // 14D (ō) LATIN SMALL LETTER O WITH MACRON (20221029: added for dutch)
	//[NOT COMPOSED] 'ø', // F8 (ø) LATIN SMALL LETTER O WITH STROKE
	//'ơ', // 1A1 (ơ) LATIN SMALL LETTER O WITH HORN (vietnamese)

	'š', // 161 (š) LATIN SMALL LETTER S WITH CARON
	'ś', // 15B (ś) LATIN SMALL LETTER S WITH ACUTE (20221202: added for polish)

	'ù', // F9 (ù) LATIN SMALL LETTER U WITH GRAVE
	'ú', // FA (ú) LATIN SMALL LETTER U WITH ACUTE
	'û', // FB (û) LATIN SMALL LETTER U WITH CIRCUMFLEX
	'ü', // FC (ü) LATIN SMALL LETTER U WITH DIAERESIS
	'ǔ', // 1D4 (ǔ) LATIN SMALL LETTER U WITH CARON
	'ū', // 16B (ū) LATIN SMALL LETTER U WITH MACRON (20221029: added)
	//'ư', // 1B0 (ư) LATIN SMALL LETTER U WITH HORN (vietnamese)

	'ý', // FD (ý) LATIN SMALL LETTER Y WITH ACUTE
	'ỳ', // 1EF3 (ỳ) LATIN SMALL LETTER Y WITH GRAVE (20221202: added for welsh/viet)

	'ž', // 17E (ž) LATIN SMALL LETTER Z WITH CARON
	'ź', // 17A (ź) LATIN SMALL LETTER Z WITH ACUTE (20221202: added for polish)
	'ż', // 17C (ż) LATIN SMALL LETTER Z WITH DOT ABOVE (20221202: added for polish)

	// === Grek ===
	'ά', // 3AC (ά) GREEK SMALL LETTER ALPHA WITH TONOS
	'έ', // 3AD (έ) GREEK SMALL LETTER EPSILON WITH TONOS
	'ή', // 3AE (ή) GREEK SMALL LETTER ETA WITH TONOS
	'ί', // 3AF (ί) GREEK SMALL LETTER IOTA WITH TONOS
	'ϊ', // 3CA (ϊ) GREEK SMALL LETTER IOTA WITH DIALYTIKA
	'ΐ', // 390 (ΐ) GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS (dangerous)
	'ϋ', // 3CB (ϋ) GREEK SMALL LETTER UPSILON WITH DIALYTIKA
	'ό', // 3CC (ό) GREEK SMALL LETTER OMICRON WITH TONOS
	'ύ', // 3CD (ύ) GREEK SMALL LETTER UPSILON WITH TONOS
	'ΰ', // 380 (ΰ) GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS (dangerous)
	'ώ', // 3CE (ώ) GREEK SMALL LETTER OMEGA WITH TONOS
	
	// === Cyrl ===
	'ѓ', // 453 (ѓ) CYRILLIC SMALL LETTER GJE
	'ё', // 451 (ё) CYRILLIC SMALL LETTER IO
	'ӣ', // 4E3 (ӣ) CYRILLIC SMALL LETTER I WITH MACRON
	'й', // 439 (й) CYRILLIC SMALL LETTER SHORT I
	'ї', // 457 (ї) CYRILLIC SMALL LETTER YI
	'ќ', // 45C (ќ) CYRILLIC SMALL LETTER KJE
	'ў', // 45E (ў) CYRILLIC SMALL LETTER SHORT U
	'ӯ', // 4EF (ӯ) CYRILLIC SMALL LETTER U WITH MACRON

	// === Kata ===
	'ガ', // 30AC (ガ) KATAKANA LETTER GA
	'ギ', // 30AE (ギ) KATAKANA LETTER GI
	'グ', // 30B0 (グ) KATAKANA LETTER GU
	'ゲ', // 30B2 (ゲ) KATAKANA LETTER GE
	'ゴ', // 30B4 (ゴ) KATAKANA LETTER GO
	'ザ', // 30B6 (ザ) KATAKANA LETTER ZA
	'ジ', // 30B8 (ジ) KATAKANA LETTER ZI
	'ズ', // 30BA (ズ) KATAKANA LETTER ZU
	'ゼ', // 30BC (ゼ) KATAKANA LETTER ZE
	'ゾ', // 30BE (ゾ) KATAKANA LETTER ZO
	'ダ', // 30C0 (ダ) KATAKANA LETTER DA
	'ヂ', // 30C2 (ヂ) KATAKANA LETTER DI
	'ヅ', // 30C5 (ヅ) KATAKANA LETTER DU
	'デ', // 30C7 (デ) KATAKANA LETTER DE
	'ド', // 30C9 (ド) KATAKANA LETTER DO
	'バ', // 30D0 (バ) KATAKANA LETTER BA
	'パ', // 30D1 (パ) KATAKANA LETTER PA
	'ビ', // 30D3 (ビ) KATAKANA LETTER BI
	'ピ', // 30D4 (ピ) KATAKANA LETTER PI
	'ブ', // 30D6 (ブ) KATAKANA LETTER BU
	'プ', // 30D7 (プ) KATAKANA LETTER PU
	'ベ', // 30D9 (ベ) KATAKANA LETTER BE
	'ペ', // 30DA (ペ) KATAKANA LETTER PE
	'ボ', // 30DC (ボ) KATAKANA LETTER BO
	'ポ', // 30DD (ポ) KATAKANA LETTER PO
	'ヴ', // 30F4 (ヴ) KATAKANA LETTER VU
	'ヷ', // 30F7 (ヷ) KATAKANA LETTER VA
	'ヸ', // 30F8 (ヸ) KATAKANA LETTER VI
	'ヹ', // 30F9 (ヹ) KATAKANA LETTER VE
	'ヺ', // 30FA (ヺ) KATAKANA LETTER VO
	'ヾ', // 30FE (ヾ) KATAKANA VOICED ITERATION MARK

	// === Hira ===
	'が', // 304C (が) HIRAGANA LETTER GA
	'ぎ', // 304E (ぎ) HIRAGANA LETTER GI
	'ぐ', // 3050 (ぐ) HIRAGANA LETTER GU
	'げ', // 3052 (げ) HIRAGANA LETTER GE
	'ご', // 3054 (ご) HIRAGANA LETTER GO
	'ざ', // 3056 (ざ) HIRAGANA LETTER ZA
	'じ', // 3058 (じ) HIRAGANA LETTER ZI
	'ず', // 305A (ず) HIRAGANA LETTER ZU
	'ぜ', // 305C (ぜ) HIRAGANA LETTER ZE
	'ぞ', // 305E (ぞ) HIRAGANA LETTER ZO
	'だ', // 3060 (だ) HIRAGANA LETTER DA
	'ぢ', // 3062 (ぢ) HIRAGANA LETTER DI
	'づ', // 3065 (づ) HIRAGANA LETTER DU
	'で', // 3067 (で) HIRAGANA LETTER DE
	'ど', // 3069 (ど) HIRAGANA LETTER DO
	'ば', // 3070 (ば) HIRAGANA LETTER BA
	'ぱ', // 3071 (ぱ) HIRAGANA LETTER PA
	'び', // 3073 (び) HIRAGANA LETTER BI
	'ぴ', // 3074 (ぴ) HIRAGANA LETTER PI
	'ぶ', // 3076 (ぶ) HIRAGANA LETTER BU
	'ぷ', // 3077 (ぷ) HIRAGANA LETTER PU
	'べ', // 3079 (べ) HIRAGANA LETTER BE
	'ぺ', // 307A (ぺ) HIRAGANA LETTER PE
	'ぼ', // 307C (ぼ) HIRAGANA LETTER BO
	'ぽ', // 307D (ぽ) HIRAGANA LETTER PO
	'ゔ', // 3094 (ゔ) HIRAGANA LETTER VU
	'ゞ', // 309E (ゞ) HIRAGANA VOICED ITERATION MARK

];