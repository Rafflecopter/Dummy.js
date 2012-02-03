(function() {

// Would be nice to have a few more books and/or fetch them from a server

var units = {
    char: function(len) {
        var sent = sherlock.split('.')
        ,   ind = sherlock.indexOf(sent[~~(Math.random() * sent.length)])
        
        return sherlock.substr(ind, len);
    }

    ,word: function(len) {
        var words = sherlock.split(' ')
        ,   ind = Math.max(0, ~~(Math.random() * words.length) - len)

        return words.slice(ind, ind+len).join(' ');
    }

    ,sentence: function(len) {
        var sent = sherlock.split('.')
        ,   ind = Math.max(0, ~~(Math.random() * sent.length) - len)

        return sent.slice(ind, ind+len).join('. ');
    }
};


function Prose(options) {
    options = options || {
         unit:  'char'
        ,len:   140
    };

    return units[options.unit](options.len);
}

DUMMY.newSample('prose', Prose);




// from Sherlock Holmes: http://www.gutenberg.org/cache/epub/1661/pg1661.txt

var sherlock = "I had called upon my friend Sherlock Holmes upon the second \
morning after Christmas, with the intention of wishing him the \
compliments of the season. He was lounging upon the sofa in a \
purple dressing-gown, a pipe-rack within his reach upon the \
right, and a pile of crumpled morning papers, evidently newly \
studied, near at hand. Beside the couch was a wooden chair, and \
on the angle of the back hung a very seedy and disreputable \
hard-felt hat, much the worse for wear, and cracked in several \
places. A lens and a forceps lying upon the seat of the chair \
suggested that the hat had been suspended in this manner for the \
purpose of examination. You are engaged, said I; perhaps I interrupt you. Not at all. I am glad to have a friend with whom I can discuss \
my results. The matter is a perfectly trivial one--he jerked his \
thumb in the direction of the old hat--but there are points in \
connection with it which are not entirely devoid of interest and \
even of instruction. I seated myself in his armchair and warmed my hands before his \
crackling fire, for a sharp frost had set in, and the windows \
were thick with the ice crystals. I suppose, I remarked, that, \
homely as it looks, this thing has some deadly story linked on to \
it--that it is the clue which will guide you in the solution of \
some mystery and the punishment of some crime. No, no. No crime, said Sherlock Holmes, laughing. Only one of \
those whimsical little incidents which will happen when you have \
four million human beings all jostling each other within the \
space of a few square miles. Amid the action and reaction of so \
dense a swarm of humanity, every possible combination of events \
may be expected to take place, and many a little problem will be \
presented which may be striking and bizarre without being \
criminal. We have already had experience of such. So much so, I remarked, that of the last six cases which I \
have added to my notes, three have been entirely free of any \
legal crime. Precisely. You allude to my attempt to recover the Irene Adler \
papers, to the singular case of Miss Mary Sutherland, and to the \
adventure of the man with the twisted lip. Well, I have no doubt \
that this small matter will fall into the same innocent category. You know Peterson, the commissionaire.   \
Yes. It is to him that this trophy belongs. It is his hat. No, no, he found it. Its owner is unknown. I beg that you will \
look upon it not as a battered billycock but as an intellectual \
problem. And, first, as to how it came here. It arrived upon \
Christmas morning, in company with a good fat goose, which is, I \
have no doubt, roasting at this moment in front of Peterson's \
fire. The facts are these: about four o'clock on Christmas \
morning, Peterson, who, as you know, is a very honest fellow, was \
returning from some small jollification and was making his way \
homeward down Tottenham Court Road. In front of him he saw, in \
the gaslight, a tallish man, walking with a slight stagger, and \
carrying a white goose slung over his shoulder. As he reached the \
corner of Goodge Street, a row broke out between this stranger \
and a little knot of roughs. One of the latter knocked off the \
man's hat, on which he raised his stick to defend himself and, \
swinging it over his head, smashed the shop window behind him. Peterson had rushed forward to protect the stranger from his \
assailants; but the man, shocked at having broken the window, and \
seeing an official-looking person in uniform rushing towards him, \
dropped his goose, took to his heels, and vanished amid the \
labyrinth of small streets which lie at the back of Tottenham \
Court Road. The roughs had also fled at the appearance of \
Peterson, so that he was left in possession of the field of \
battle, and also of the spoils of victory in the shape of this \
battered hat and a most unimpeachable Christmas goose. Which surely he restored to their owner.   \
My dear fellow, there lies the problem. It is true that 'For \
Mrs. Henry Baker' was printed upon a small card which was tied to \
the bird's left leg, and it is also true that the initials 'H. B.' are legible upon the lining of this hat, but as there are \
some thousands of Bakers, and some hundreds of Henry Bakers in \
this city of ours, it is not easy to restore lost property to any \
one of them. What, then, did Peterson do.   \
He brought round both hat and goose to me on Christmas morning, \
knowing that even the smallest problems are of interest to me. The goose we retained until this morning, when there were signs \
that, in spite of the slight frost, it would be well that it \
should be eaten without unnecessary delay. Its finder has carried \
it off, therefore, to fulfil the ultimate destiny of a goose, \
while I continue to retain the hat of the unknown gentleman who \
lost his Christmas dinner. Did he not advertise.   \
No. Then, what clue could you have as to his identity.   \
Only as much as we can deduce. From his hat.   \
Precisely. But you are joking. What can you gather from this old battered \
felt.   \
Here is my lens. You know my methods. What can you gather \
yourself as to the individuality of the man who has worn this \
article.   \
I took the tattered object in my hands and turned it over rather \
ruefully. It was a very ordinary black hat of the usual round \
shape, hard and much the worse for wear. The lining had been of \
red silk, but was a good deal discoloured. There was no maker's \
name; but, as Holmes had remarked, the initials H. B. were \
scrawled upon one side. It was pierced in the brim for a \
hat-securer, but the elastic was missing. For the rest, it was \
cracked, exceedingly dusty, and spotted in several places, \
although there seemed to have been some attempt to hide the \
discoloured patches by smearing them with ink. I can see nothing, said I, handing it back to my friend. On the contrary, Watson, you can see everything. You fail, \
however, to reason from what you see. You are too timid in \
drawing your inferences. Then, pray tell me what it is that you can infer from this hat.   \
He picked it up and gazed at it in the peculiar introspective \
fashion which was characteristic of him. It is perhaps less \
suggestive than it might have been, he remarked, and yet there \
are a few inferences which are very distinct, and a few others \
which represent at least a strong balance of probability. That \
the man was highly intellectual is of course obvious upon the \
face of it, and also that he was fairly well-to-do within the \
last three years, although he has now fallen upon evil days. He \
had foresight, but has less now than formerly, pointing to a \
moral retrogression, which, when taken with the decline of his \
fortunes, seems to indicate some evil influence, probably drink, \
at work upon him. This may account also for the obvious fact that \
his wife has ceased to love him. My dear Holmes! \
  \
He has, however, retained some degree of self-respect, he \
continued, disregarding my remonstrance. He is a man who leads a \
sedentary life, goes out little, is out of training entirely, is \
middle-aged, has grizzled hair which he has had cut within the \
last few days, and which he anoints with lime-cream. These are \
the more patent facts which are to be deduced from his hat. Also, \
by the way, that it is extremely improbable that he has gas laid \
on in his house. You are certainly joking, Holmes. Not in the least. Is it possible that even now, when I give you \
these results, you are unable to see how they are attained.   \
I have no doubt that I am very stupid, but I must confess that I \
am unable to follow you. For example, how did you deduce that \
this man was intellectual.   \
For answer Holmes clapped the hat upon his head. It came right \
over the forehead and settled upon the bridge of his nose. It is \
a question of cubic capacity, said he; a man with so large a \
brain must have something in it. The decline of his fortunes, then.   \
This hat is three years old. These flat brims curled at the edge \
came in then. It is a hat of the very best quality. Look at the \
band of ribbed silk and the excellent lining. If this man could \
afford to buy so expensive a hat three years ago, and has had no \
hat since, then he has assuredly gone down in the world. Well, that is clear enough, certainly. But how about the \
foresight and the moral retrogression.   \
Sherlock Holmes laughed. Here is the foresight, said he putting \
his finger upon the little disc and loop of the hat-securer. They are never sold upon hats. If this man ordered one, it is a \
sign of a certain amount of foresight, since he went out of his \
way to take this precaution against the wind. But since we see \
that he has broken the elastic and has not troubled to replace \
it, it is obvious that he has less foresight now than formerly, \
which is a distinct proof of a weakening nature. On the other \
hand, he has endeavoured to conceal some of these stains upon the \
felt by daubing them with ink, which is a sign that he has not \
entirely lost his self-respect. Your reasoning is certainly plausible. The further points, that he is middle-aged, that his hair is \
grizzled, that it has been recently cut, and that he uses \
lime-cream, are all to be gathered from a close examination of the \
lower part of the lining. The lens discloses a large number of \
hair-ends, clean cut by the scissors of the barber. They all \
appear to be adhesive, and there is a distinct odour of \
lime-cream. This dust, you will observe, is not the gritty, grey \
dust of the street but the fluffy brown dust of the house, \
showing that it has been hung up indoors most of the time, while \
the marks of moisture upon the inside are proof positive that the \
wearer perspired very freely, and could therefore, hardly be in \
the best of training. But his wife--you said that she had ceased to love him. This hat has not been brushed for weeks. When I see you, my dear \
Watson, with a week's accumulation of dust upon your hat, and \
when your wife allows you to go out in such a state, I shall fear \
that you also have been unfortunate enough to lose your wife's \
affection. But he might be a bachelor. Nay, he was bringing home the goose as a peace-offering to his \
wife. Remember the card upon the bird's leg. You have an answer to everything. But how on earth do you deduce \
that the gas is not laid on in his house.   \
One tallow stain, or even two, might come by chance; but when I \
see no less than five, I think that there can be little doubt \
that the individual must be brought into frequent contact with \
burning tallow--walks upstairs at night probably with his hat in \
one hand and a guttering candle in the other. Anyhow, he never \
got tallow-stains from a gas-jet. Are you satisfied.   \
Well, it is very ingenious, said I, laughing; but since, as \
you said just now, there has been no crime committed, and no harm \
done save the loss of a goose, all this seems to be rather a \
waste of energy. Sherlock Holmes had opened his mouth to reply, when the door flew \
open, and Peterson, the commissionaire, rushed into the apartment \
with flushed cheeks and the face of a man who is dazed with \
astonishment. The goose, Mr. Holmes! The goose, sir! he gasped. Eh? What of it, then? Has it returned to life and flapped off \
through the kitchen window? Holmes twisted himself round upon \
the sofa to get a fairer view of the man's excited face. See here, sir! See what my wife found in its crop! He held out \
his hand and displayed upon the centre of the palm a brilliantly \
scintillating blue stone, rather smaller than a bean in size, but \
of such purity and radiance that it twinkled like an electric \
point in the dark hollow of his hand. Sherlock Holmes sat up with a whistle. By Jove, Peterson! said \
he, this is treasure trove indeed. I suppose you know what you \
have got.   \
A diamond, sir? A precious stone. It cuts into glass as though \
it were putty. It's more than a precious stone. It is the precious stone. Not the Countess of Morcar's blue carbuncle! I ejaculated. Precisely so. I ought to know its size and shape, seeing that I \
have read the advertisement about it in The Times every day \
lately. It is absolutely unique, and its value can only be \
conjectured, but the reward offered of 1000 pounds is certainly \
not within a twentieth part of the market price. A thousand pounds! Great Lord of mercy! The commissionaire \
plumped down into a chair and stared from one to the other of us. That is the reward, and I have reason to know that there are \
sentimental considerations in the background which would induce \
the Countess to part with half her fortune if she could but \
recover the gem. It was lost, if I remember aright, at the Hotel Cosmopolitan, I \
remarked. Precisely so, on December 22nd, just five days ago. John Horner, \
a plumber, was accused of having abstracted it from the lady's \
jewel-case. The evidence against him was so strong that the case \
has been referred to the Assizes. I have some account of the \
matter here, I believe. He rummaged amid his newspapers, \
glancing over the dates, until at last he smoothed one out, \
doubled it over, and read the following paragraph.   \
Hotel Cosmopolitan Jewel Robbery. John Horner, 26, plumber, was \
brought up upon the charge of having upon the 22nd inst., \
abstracted from the jewel-case of the Countess of Morcar the \
valuable gem known as the blue carbuncle. James Ryder, \
upper-attendant at the hotel, gave his evidence to the effect \
that he had shown Horner up to the dressing-room of the Countess \
of Morcar upon the day of the robbery in order that he might \
solder the second bar of the grate, which was loose. He had \
remained with Horner some little time, but had finally been \
called away. On returning, he found that Horner had disappeared, \
that the bureau had been forced open, and that the small morocco \
casket in which, as it afterwards transpired, the Countess was \
accustomed to keep her jewel, was lying empty upon the \
dressing-table. Ryder instantly gave the alarm, and Horner was \
arrested the same evening; but the stone could not be found \
either upon his person or in his rooms. Catherine Cusack, maid to \
the Countess, deposed to having heard Ryder's cry of dismay on \
discovering the robbery, and to having rushed into the room, \
where she found matters as described by the last witness. Inspector Bradstreet, B division, gave evidence as to the arrest \
of Horner, who struggled frantically, and protested his innocence \
in the strongest terms. Evidence of a previous conviction for \
robbery having been given against the prisoner, the magistrate \
refused to deal summarily with the offence, but referred it to \
the Assizes. Horner, who had shown signs of intense emotion \
during the proceedings, fainted away at the conclusion and was \
carried out of court. Hum! So much for the police-court, said Holmes thoughtfully, \
tossing aside the paper. The question for us now to solve is the \
sequence of events leading from a rifled jewel-case at one end to \
the crop of a goose in Tottenham Court Road at the other. You \
see, Watson, our little deductions have suddenly assumed a much \
more important and less innocent aspect. Here is the stone; the \
stone came from the goose, and the goose came from Mr. Henry \
Baker, the gentleman with the bad hat and all the other \
characteristics with which I have bored you. So now we must set \
ourselves very seriously to finding this gentleman and \
ascertaining what part he has played in this little mystery. To \
do this, we must try the simplest means first, and these lie \
undoubtedly in an advertisement in all the evening papers. If \
this fail, I shall have recourse to other methods. "

}());
