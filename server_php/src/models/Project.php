<?php
/**
 * @Entity @Table(name="projects")
 **/
class Project implements JsonSerializable
{
    /** @Id @Column(type="integer") @GeneratedValue **/
    protected $id;

    /** @Column(type="string") **/
    protected $keyword;
 
    /** @Column(type="string") **/
    protected $file_name;

    /** @Column(type="string") **/
    protected $category;

    /** @Column(type="integer") **/
    protected $category_sort_order;

    /** @Column(type="string") **/
    protected $title;

    /** @Column(type="integer") **/
    protected $start_date;

    /** @Column(type="integer", nullable=true) **/
    protected $end_date;

    /** @Column(type="string") **/
    protected $blurb;

    /** @Column(type="string") **/
    protected $image_url;

    public function getId()
    {
        return $this->id;
    }

    public function getKeyword()
    {
        return $this->keyword;
    }

    public function setKeyword($kw)
    {
        $this->keyword = $kw;
    }

    public function getCategory()
    {
        return $this->category;
    }

    public function setCategory($category)
    {
        $this->category = $category;
    }

    public function getFileName()
    {
        return $this->file_name;
    }

    public function setFileName($file_name)
    {
        $this->file_name = $file_name;
    }

    public function getSortOrder()
    {
        return $this->category_sort_order;
    }

    public function setSortOrder($order)
    {
        $this->category_sort_order = $order;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function getStartDate()
    {
        return $this->start_date;
    }

    public function setStartDate($date)
    {
        $this->start_date = $date;
    }

    public function getEndDate()
    {
        return $this->end_date;
    }

    public function setEndDate($date)
    {
        $this->end_date = $date;
    }

    public function getBlurb()
    {
        return $this->blurb;
    }

    public function setBlurb($blurb)
    {
        $this->blurb = $blurb;
    }

    public function getImageUrl()
    {
        return $this->image_url;
    }

    public function setImageUrl($url)
    {
        $this->image_url = $url;
    }

    public function jsonSerialize() 
    {
        $json = array();
        foreach($this as $key => $value) 
        {
            $json[$key] = $value;
        }
        return $json; // or json_encode($json)
    }
}