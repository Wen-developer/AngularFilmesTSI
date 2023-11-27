import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  nome: string = 'Wendell';
  nomeCategoria = '';
  imagem = '';
  minhaFuncao() :void {
    alert('clicou')
  }
  condicao1 = false;
  condicao2 = true;
  nomeDigitado = '';
   categorias: string[] = ['comedia','acao', 'drama'];

   catComedia = [
    {name: 'Superbad', description: 'Two high school friends attempt to have a wild night before parting ways for college.', imagem: 'https://a.ltrbxd.com/resized/film-poster/9/1/4/3/6/91436-superbad-0-230-0-345-crop.jpg?v=1b5cf8c283'},
    {name: 'The Hangover', description: 'Friends search for their missing friend after a bachelor party gone wrong in Las Vegas.', imagem: 'https://a.ltrbxd.com/resized/film-poster/4/1/2/8/1/41281-the-hangover-0-230-0-345-crop.jpg?v=71506f0794'},
    {name: 'Bridesmaids', description: 'A womans life unravels as she competes with a fellow bridesmaid for the attention of the bride.', imagem: 'https://a.ltrbxd.com/resized/film-poster/8/9/0/4/3/89043-bridesmaids-0-230-0-345-crop.jpg?v=59e7fc7472'},
    {name: 'Step Brothers', description: 'Two grown men become stepbrothers and clash in a battle for their parents’ affection.', imagem: 'https://a.ltrbxd.com/resized/film-poster/4/1/7/3/6/41736-step-brothers-0-230-0-345-crop.jpg?v=e02fe6b6f3'},
    {name: 'Anchorman', description: 'A 1970s news anchor struggles to stay relevant as the industry evolves.', imagem: 'https://a.ltrbxd.com/resized/film-poster/1/0/5/9/6/4/105964-anchorman-the-legend-of-ron-burgundy-0-230-0-345-crop.jpg?v=6d3b1e8c13'}
  ];
  
  catAcao = [
    {name: 'The Dark Knight', description: 'Batman faces off against a psychopathic criminal known as the Joker.', imagem: 'https://a.ltrbxd.com/resized/film-poster/0/9/5/3/3/9533-the-dark-knight-0-230-0-345-crop.jpg?v=94b905a5cd'},
    {name: 'Inception', description: 'A thief enters people’s dreams to steal their secrets in this mind-bending thriller.', imagem: 'https://a.ltrbxd.com/resized/film-poster/6/5/4/8/5/65485-inception-0-230-0-345-crop.jpg?v=2aa3d01e18'},
    {name: 'Mad Max: Fury Road', description: 'Max helps a woman and a group of female prisoners escape a tyrant in a desert chase.', imagem: 'https://a.ltrbxd.com/resized/film-poster/0/9/4/7/2/2/94722-mad-max-fury-road-0-230-0-345-crop.jpg?v=fe27a21c9b'},
    {name: 'The Matrix', description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.', imagem: 'https://a.ltrbxd.com/resized/film-poster/2/9/1/8/6/29186-the-matrix-0-230-0-345-crop.jpg?v=61bbd13198'},
    {name: 'Gladiator', description: 'A former Roman general seeks revenge against the corrupt emperor who murdered his family.', imagem: 'https://a.ltrbxd.com/resized/film-poster/4/5/0/1/4/45014-gladiator-0-230-0-345-crop.jpg?v=d7a623a725'}
  ];
  
catDrama = [
    {name: 'The Shawshank Redemption', description: 'Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.', imagem: 'https://a.ltrbxd.com/resized/film-poster/6/7/4/2/4/67424-the-shawshank-redemption-0-230-0-345-crop.jpg?v=d19b89144d'},
    {name: 'Forrest Gump', description: 'A man with a low IQ embarks on an extraordinary journey through life.', imagem: 'https://a.ltrbxd.com/resized/film-poster/8/9/9/7/4/89974-forrest-gump-0-230-0-345-crop.jpg?v=0846030c7c'},
    {name: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', imagem: 'https://a.ltrbxd.com/resized/film-poster/9/1/8/5/9/91859-the-godfather-0-230-0-345-crop.jpg?v=d7b19c9df3'},
    {name: 'Schindler\'s List', description: 'A German businessman saves the lives of more than a thousand Polish-Jewish refugees during the Holocaust.', imagem: 'https://a.ltrbxd.com/resized/film-poster/2/3/5/2/6/23526-schindlers-list-0-230-0-345-crop.jpg?v=67f86bbf17'},
    {name: 'The Pianist', description: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto in World War II.', imagem: 'https://a.ltrbxd.com/resized/film-poster/6/8/2/2/4/682'}
  ]; 
}