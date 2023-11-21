export default function Adopt() {
    return (
        <div className="adopt container">
            <h1><strong>Adopt</strong></h1>
            <h2><em>Ready to adopt?</em></h2>
            <h3>Here are some dogs around Los Angeles looking for a forever home!</h3>
            <div className="row dog-card">
                <div className="col-6 desc">
                    <p><strong>Name: </strong><em>Chewy</em></p> 
                    <p><strong>Age: </strong><em>Senior</em></p>
                    <p><strong>Breed: </strong><em>Shih Tzu Mix</em></p>
                    <p><strong>Characteristics: </strong><em>Friendly, Affectionate, Loyal, Gentle, Brave, Dignified, Loves Kisses</em></p>
                    <p><strong>Contact: </strong><em>Perfect Pet Rescue</em></p>
                    <p><em>310-726-3731</em></p>
                </div>
                <img className="col-6" src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/68854599/5/?bust=1696663361&width=720" alt="chewy"/>
            </div>
            <div className="row dog-card">
                <div className="col-6 desc">
                    <p><strong>Name: </strong><em>Penny</em></p> 
                    <p><strong>Age: </strong><em>Adult</em></p>
                    <p><strong>Breed: </strong><em>Staffordshire Bull Terrier & American Staffordshire Terrier Mix</em></p>
                    <p><strong>Characteristics: </strong><em>Friendly, Gentle, Playful, Quiet, Loves Kisses</em></p>
                    <p><strong>Contact: </strong><em>Thunderhill Sanctuary</em></p>
                    <p><em>661-565-1095</em></p>
                </div>
                <img className="col-6" src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/69752769/5/?bust=1700534543&width=720" alt="penny"/>
            </div>
            <div className="row dog-card">
                <div className="col-6 desc">
                    <p><strong>Name: </strong><em>Parker</em></p> 
                    <p><strong>Age: </strong><em>Adult</em></p>
                    <p><strong>Breed: </strong><em>Terrier Mix</em></p>
                    <p><strong>Characteristics: </strong><em>Friendly, Playful, Curious, Brave, Loyal</em></p>
                    <p><strong>Contact: </strong><em>Perfect Pet Rescue</em></p>
                    <p><em>310-726-3731</em></p>
                </div>
                <img className="col-6" src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/68652173/2/?bust=1700527709&width=720" alt="parker"/>
            </div>
            <h4>Dog Shelters around Los Angeles</h4>
            <div className="shelters row">
                <div className="col-6">
                    <p><a href="https://www.laanimalservices.com/west-los-angeles" target="_blank" rel="noreferrer">West Los Angeles Animal Shelter</a></p>
                    <p><a href="https://www.laanimalservices.com/South-Los-Angeles" target="_blank" rel="noreferrer">South LA Animal Shelter</a></p>
                    <p><a href="https://www.pawsoflarescue.org/?gclid=CjwKCAiAx_GqBhBQEiwAlDNAZnSffWyG7dG6MRnBNv4gin0kVvxXDfRD9-XcxVmKg4GLqfga1hzqShoCBJAQAvD_BwE" target="_blank" rel="noreferrer">Paws of L.A. Rescue</a></p>
                    <p><a href="https://www.laloveandleashes.com/" target="_blank" rel="noreferrer">LA Love & Leashes</a></p>
                    <p><a href="https://www.laanimalservices.com/east-valley" target="_blank" rel="noreferrer">Los Angeles City East Valley Animal Shelter</a></p>
                </div>
                <div className="col-6">
                    <p><a href="https://petorphans.org/" target="_blank" rel="noreferrer">Pet Orphans of Southern California</a></p>
                    <p><a href="https://goldenyearsdogsanctuary.com/" target="_blank" rel="noreferrer">Golden Years Dog Sanctuary</a></p>
                    <p><a href="https://bestfriends.org/los-angeles/adopt?gad_source=1&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZnKLBL98C0Bz9cR1fgWD3qjN8IGzjskoR99xLlfmz8AKS394FEGPExoCd74QAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noreferrer">Best Friends Pet Adoption Center</a></p>
                    <p><a href="https://www.perfectpetrescue.com/" target="_blank" rel="noreferrer">Perfect Pet Rescue</a></p>
                    <p><a href="https://www.ivhsspca.org/pets-in-our-care/?https%3A%2F%2Fwww_ivhsspca_org%2F&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZhvdhKuzV-yAIl88zjRDXiRQ9h85D8o_YPNafpKBKf8DxPIaZ03JtxoCKA0QAvD_BwE" target="_blank" rel="noreferrer">Inland Valley Humane Society & S.P.C.A.</a></p>
                </div>
            </div>

        </div>
    )
}